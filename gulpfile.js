const gulp = require("gulp");
const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");

/**
 * Create Info.plist file for a theme
 * @param {Object} themeConfig - Theme configuration
 * @param {string} outputDir - Output directory path
 */
function createInfoPlist(themeConfig, outputDir) {
  const infoPlist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
\t<key>Name</key>
\t<string>${themeConfig.name}</string>
\t<key>ThemeIdentifier</key>
\t<string>${themeConfig.identifier}</string>
\t<key>CreatorHomePage</key>
\t<string>${themeConfig.homepage}</string>
\t<key>CreatorName</key>
\t<string>${themeConfig.creator}</string>
\t<key>Version</key>
\t<integer>${themeConfig.version}</integer>
</dict>
</plist>`;

  fs.writeFileSync(path.join(outputDir, "Info.plist"), infoPlist);
}

/**
 * Generate CSS variables for a theme
 * @param {Object} themeConfig - Theme configuration
 * @returns {string} - CSS variables
 */
function generateCssVariables(themeConfig) {
  let cssVars = `:root {\n`;

  // Add light mode variables
  Object.entries(themeConfig.lightMode).forEach(([key, value]) => {
    cssVars += `  ${key}: ${value};\n`;
  });
  cssVars += `  color-scheme: light dark;\n`;
  cssVars += `}\n\n`;

  // Add dark mode variables
  cssVars += `@media (prefers-color-scheme: dark) {\n`;
  cssVars += `  :root {\n`;
  Object.entries(themeConfig.darkMode).forEach(([key, value]) => {
    cssVars += `    ${key}: ${value};\n`;
  });
  cssVars += `  }\n`;
  cssVars += `}\n\n`;

  return cssVars;
}

/**
 * Process CSS with Tailwind using npx command
 * @param {string} inputPath - Path to the input CSS file
 * @param {string} outputPath - Path to the output CSS file
 * @returns {Promise<void>} - Promise that resolves when processing is complete
 */
function processTailwindWithNpx(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    // Use npx to run tailwindcss cli
    const command = `npx tailwindcss -i ${inputPath} -o ${outputPath} --config ${path.resolve(__dirname, "tailwind.config.js")}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Tailwind processing error: ${stderr || error.message}`);
        reject(error);
        return;
      }

      // Success
      resolve();
    });
  });
}

/**
 * Build a single theme
 * @param {string} theme - Theme directory name
 * @returns {Promise} - Promise that resolves when the theme is built
 */
function buildTheme(theme) {
  return new Promise((resolve, reject) => {
    (async function () {
      try {
        const themePath = path.join(__dirname, "src/themes", theme);
        const themeConfig = require(path.join(themePath, "theme.js"));
        const outputDir = path.join(__dirname, "build", `${themeConfig.name}.nnwtheme`);

        // Ensure the output directory exists
        fs.ensureDirSync(outputDir);

        // Create the Info.plist file
        createInfoPlist(themeConfig, outputDir);

        // Copy the template HTML from src/templates
        fs.copyFileSync(
          path.join(__dirname, "src/templates/template.html"),
          path.join(outputDir, "template.html")
        );

        // Generate CSS variables for the theme
        const cssVars = generateCssVariables(themeConfig);

        // Read the base CSS that uses Tailwind
        const baseCss = fs.readFileSync(path.join(__dirname, "src/css/base.css"), "utf8");

        // Combine the theme variables with the base CSS
        const combinedCss = cssVars + baseCss;

        // Create temporary CSS input file
        const tempInputPath = path.join(themePath, `temp-${theme}-input.css`);
        const tempOutputPath = path.join(themePath, `temp-${theme}-output.css`);
        fs.writeFileSync(tempInputPath, combinedCss);

        try {
          // Process with Tailwind CLI
          await processTailwindWithNpx(tempInputPath, tempOutputPath);

          // Read the processed CSS
          const processedCss = fs.readFileSync(tempOutputPath, "utf8");

          // Write the processed CSS to the output file
          fs.writeFileSync(path.join(outputDir, "stylesheet.css"), processedCss);

          console.log(`Built theme: ${themeConfig.name} (with Tailwind)`);
        } catch (error) {
          console.error(`Error processing CSS for theme ${theme}:`, error);
          // Simply fail the build instead of using the fallback
          throw new Error(
            `Failed to process theme ${themeConfig.name} with Tailwind. Please fix the CSS errors.`
          );
        } finally {
          // Clean up temporary files
          try {
            fs.unlinkSync(tempInputPath);
            if (fs.existsSync(tempOutputPath)) {
              fs.unlinkSync(tempOutputPath);
            }
          } catch (e) {
            console.warn(`Unable to clean up temporary files for ${theme}:`, e.message);
          }
        }

        resolve();
      } catch (error) {
        console.error(`Error building theme ${theme}:`, error);
        reject(error);
      }
    })();
  });
}

/**
 * Build all themes sequentially
 */
function buildAllThemes(done) {
  try {
    // Ensure the build directory exists
    fs.ensureDirSync(path.join(__dirname, "build"));

    // Get all theme directories
    const themesDir = path.join(__dirname, "src/themes");
    const themes = fs
      .readdirSync(themesDir)
      .filter((file) => fs.statSync(path.join(themesDir, file)).isDirectory());

    // Build themes sequentially to avoid stream conflicts
    themes
      .reduce(
        (previousPromise, theme) => previousPromise.then(() => buildTheme(theme)),
        Promise.resolve()
      )
      .then(() => done())
      .catch((error) => {
        console.error("Error building themes:", error);
        done(error);
      });
  } catch (error) {
    console.error("Error building themes:", error);
    done(error);
  }
}

/**
 * Watch for changes and rebuild
 */
function watchFiles() {
  gulp.watch(["src/**/*", "tailwind.config.js", "postcss.config.js"], buildAllThemes);
}

/**
 * Clean built themes
 */
function cleanThemes(done) {
  try {
    fs.removeSync(path.join(__dirname, "build"));
    fs.ensureDirSync(path.join(__dirname, "build"));
    console.log("Cleaned build directory");
    done();
  } catch (error) {
    console.error("Error cleaning build:", error);
    done(error);
  }
}

// Define tasks
exports.build = buildAllThemes;
exports.watch = watchFiles;
exports.clean = cleanThemes;
exports.default = gulp.series(buildAllThemes, watchFiles);
