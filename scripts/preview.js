const fs = require("fs-extra");
const path = require("path");
const open = require("open");
const { exec } = require("child_process");
const os = require("os");

// Get the build directory
const buildDir = path.join(__dirname, "../build");

// Function to create a preview HTML file
async function createPreview() {
  // Check if build directory exists
  if (!fs.existsSync(buildDir)) {
    console.error("Build directory not found. Run 'npm run build' first.");
    process.exit(1);
  }

  // Get all theme directories
  const themeDirs = fs
    .readdirSync(buildDir)
    .filter((file) => file.endsWith(".nnwtheme"))
    .map((file) => path.join(buildDir, file));

  if (themeDirs.length === 0) {
    console.error("No themes found in build directory. Run 'npm run build' first.");
    process.exit(1);
  }

  // Create a preview directory
  const previewDir = path.join(__dirname, "../preview");
  fs.ensureDirSync(previewDir);

  // Create a preview HTML file
  let previewHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NetNewsWire Themes Preview</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 20px;
      transition: background-color 0.3s, color 0.3s;
    }
    .themes-container {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
    }
    .theme-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      width: 360px;
      box-shadow: 0 2px 5px #0000001A;
      transition: all 0.3s ease;
    }
    .theme-header {
      padding: 15px;
      background: #f5f5f5;
      border-bottom: 1px solid #ddd;
      transition: background-color 0.3s, border-color 0.3s;
    }
    .theme-title {
      margin: 0;
      font-size: 18px;
    }
    .theme-creator {
      margin: 5px 0 0;
      color: #666;
      font-size: 14px;
    }
    .iframe-container {
      height: 450px;
      overflow: hidden;
      position: relative;
    }
    iframe {
      border: none;
      width: 100%;
      height: 100%;
      transform: scale(0.9);
      transform-origin: 0 0;
    }
    .theme-actions {
      padding: 12px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .controls {
      position: sticky;
      top: 0;
      z-index: 100;
      background: #fff;
      padding: 15px 0;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
    button {
      border: none;
      background: #0066cc;
      color: white;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.3s;
    }
    button:hover {
      background: #0055aa;
    }
    h1 {
      margin: 0;
    }
    .dark-mode {
      background: #222;
      color: #eee;
    }
    .dark-mode .controls {
      background: #222;
      border-color: #444;
    }
    .dark-mode .theme-card {
      border-color: #444;
      box-shadow: 0 2px 5px #ffffff1A;
    }
    .dark-mode .theme-header {
      background: #333;
      border-color: #444;
    }
    .dark-mode .theme-creator {
      color: #aaa;
    }
    .dark-mode button {
      background: #3399ff;
    }
    .dark-mode button:hover {
      background: #4477ff;
    }
  </style>
</head>
<body>
  <div class="controls">
    <h1>NetNewsWire Themes Preview</h1>
    <div>
      <button id="toggle-mode">Toggle Dark Mode</button>
    </div>
  </div>

  <div class="themes-container">
`;

  // For each theme, create an iframe with the theme's template and stylesheet
  for (const themeDir of themeDirs) {
    const themeName = path.basename(themeDir, ".nnwtheme");
    const infoPlistPath = path.join(themeDir, "Info.plist");

    // Parse the Info.plist file to get the theme name and creator
    const infoPlistContent = fs.readFileSync(infoPlistPath, "utf8");
    const nameMatch = /<key>Name<\/key>\s*<string>([^<]+)<\/string>/i.exec(infoPlistContent);
    const creatorMatch = /<key>CreatorName<\/key>\s*<string>([^<]+)<\/string>/i.exec(
      infoPlistContent
    );

    const displayName = nameMatch ? nameMatch[1] : themeName;
    const creator = creatorMatch ? creatorMatch[1] : "Unknown";

    // Load the corresponding theme configuration
    let themeObj = {};
    try {
      const themeConfigPath = path.join(
        __dirname,
        "../src/themes",
        themeName.toLowerCase(),
        "theme.js"
      );
      themeObj = require(themeConfigPath);
    } catch (error) {
      console.warn(`Could not load theme configuration for ${themeName}: ${error.message}`);
      themeObj = { lightMode: {}, darkMode: {} };
    }

    // Create a temporary HTML file for the iframe
    const iframeHtmlPath = path.join(previewDir, `${themeName}.html`);

    // Read the theme's stylesheet
    const stylesheetPath = path.join(themeDir, "stylesheet.css");
    const stylesheetContent = fs.readFileSync(stylesheetPath, "utf8");

    // Create a more comprehensive sample article content
    const articleContent = `
      <h1>Sample Article Title</h1>
      <p>This is a sample paragraph of text for the article. It demonstrates how text looks in this theme. <a href="#">Here's a sample link</a> inside a paragraph of text.</p>

      <h2>Heading Level 2</h2>
      <p>NetNewsWire is a free and open source RSS reader for Mac, iPhone, and iPad.</p>

      <blockquote>
        <p>This is a blockquote showing how quotes are styled in this theme. Blockquotes can contain multiple paragraphs and other elements.</p>
        <p>This is a second paragraph in the blockquote.</p>
        <blockquote>
          <p>This is a nested blockquote to show nested styling.</p>
        </blockquote>
      </blockquote>

      <h3>Code Samples</h3>
      <p>Below is an inline code example: <code>const theme = "NetNewsWire";</code> which should show inline code styling.</p>

      <pre><code>// This is a code block
function sampleCode() {
  return "Hello, NetNewsWire!";
}

// More code to show syntax highlighting
const colors = {
  primary: "#086aee",
  secondary: "#5e9ef4",
};</code></pre>

      <h3>Lists</h3>
      <ul>
        <li>First unordered list item</li>
        <li>Second unordered list item with <a href="#">a link</a></li>
        <li>Third unordered list item</li>
      </ul>

      <ol>
        <li>First ordered list item</li>
        <li>Second ordered list item</li>
        <li>Third ordered list item</li>
      </ol>

      <h3>Tables</h3>
      <div class="nnw-overflow">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>The title of the article</td>
            </tr>
            <tr>
              <td>byline</td>
              <td>string</td>
              <td>The author of the article</td>
            </tr>
            <tr>
              <td>body</td>
              <td>HTML</td>
              <td>The content of the article</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Images</h3>
      <p>Below is a sample image:</p>
      <figure>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzc3NyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0id2hpdGUiPlNhbXBsZSBJbWFnZTwvdGV4dD48L3N2Zz4=" alt="Sample Image" width="200" height="100">
        <figcaption>A sample image caption that sits directly below the image</figcaption>
      </figure>
    `;

    // Create the iframe HTML content based on the template.html structure
    const iframeHtml = `
      <!DOCTYPE html>
      <html class="light-theme">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${stylesheetContent}</style>
        <style>
          /* Explicit styling for dark/light mode theme variants */
          html.dark-theme {
            color-scheme: dark;
          }

          html.light-theme {
            color-scheme: light;
          }

          /* Apply the CSS variables based on theme class */
          html.dark-theme {
            ${Object.entries(themeObj.darkMode || {})
              .map(([key, value]) => `${key}: ${value};`)
              .join("\n            ")}
          }

          html.light-theme {
            ${Object.entries(themeObj.lightMode || {})
              .map(([key, value]) => `${key}: ${value};`)
              .join("\n            ")}
          }

          /* Override any media queries with our explicit theme selection */
          @media (prefers-color-scheme: dark) {
            html.light-theme {
              color-scheme: light !important;
            }
          }

          @media (prefers-color-scheme: light) {
            html.dark-theme {
              color-scheme: dark !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="feedHeader">
          <div class="articleTitle">
            <h1><a href="#">Sample Article</a></h1>
          </div>
          <div class="articleFeedName">
            <a href="#">Sample Feed</a>
          </div>
          <div class="articleByLine">John Doe</div>
          <div class="articleDateline">April 29, 2025</div>
        </div>
        <hr />
        <article>
          <div id="bodyContainer" class="articleBody mediumText">
            ${articleContent}
          </div>
          <div class="externalLink">
            <a href="https://example.com">https://example.com</a>
          </div>
        </article>
        <script type="text/javascript">
          /*
          The arrow-circle-right SVG is provided by Font Awesome under the Creative Commons Attribution 4.0 International License.
          For more details view the license here: https://fontawesome.com/license
          */
          let externalLinkElement = document.body
            .getElementsByClassName("externalLink")[0]
            .querySelectorAll("a")[0];
          if (externalLinkElement.innerText != "") {
            let host = externalLinkElement.hostname;
            externalLinkElement.innerHTML =
              host +
              " " +
              '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" class="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>';
          }

          // More robust function to switch between dark and light mode
          window.setThemeMode = function(isDark) {
            document.documentElement.className = isDark ? 'dark-theme' : 'light-theme';

            // For debugging
            console.log('Theme mode changed to: ' + (isDark ? 'dark' : 'light'));
          };

          // Listen for messages from parent window
          window.addEventListener('message', function(event) {
            if (event.data && event.data.type === 'themeMode') {
              window.setThemeMode(event.data.isDark);
            }
          });
        </script>
      </body>
      </html>
    `;

    // Write the iframe HTML to a file
    fs.writeFileSync(iframeHtmlPath, iframeHtml);

    // Add the theme card to the preview HTML
    previewHtml += `
    <div class="theme-card">
      <div class="theme-header">
        <h2 class="theme-title">${displayName}</h2>
        <p class="theme-creator">by ${creator}</p>
      </div>
      <div class="iframe-container">
        <iframe src="${path.relative(previewDir, iframeHtmlPath)}" title="${displayName} theme preview" id="iframe-${themeName.toLowerCase().replace(/[^a-z0-9]/g, "-")}"></iframe>
      </div>
      <div class="theme-actions">
        <button onclick="window.open('${path.relative(previewDir, iframeHtmlPath)}', '_blank')">View Full Size</button>
      </div>
    </div>
    `;
  }

  previewHtml += `
  </div>
  <script>
    // Apply theme mode to all iframes
    function applyThemeModeToIframes(isDarkMode) {
      const iframes = document.querySelectorAll('iframe');

      iframes.forEach(iframe => {
        // First try to use the setThemeMode function directly
        try {
          if (iframe.contentWindow && typeof iframe.contentWindow.setThemeMode === 'function') {
            iframe.contentWindow.setThemeMode(isDarkMode);
          }
        } catch (e) {
          console.log('Could not call setThemeMode directly, trying postMessage:', e);
        }

        // Also send a message as a fallback approach
        try {
          iframe.contentWindow.postMessage({
            type: 'themeMode',
            isDark: isDarkMode
          }, '*');
        } catch (e) {
          console.error('Could not post message to iframe:', e);
        }
      });
    }

    // Toggle dark mode
    document.getElementById('toggle-mode').addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');

      // Apply the theme mode to all iframes
      applyThemeModeToIframes(isDarkMode);
    });

    // Initialize iframes on page load
    window.addEventListener('load', function() {
      // Set a timeout to ensure iframes are loaded
      setTimeout(function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        applyThemeModeToIframes(isDarkMode);
      }, 500);
    });

    // Handle iframe load events to set the correct theme
    document.querySelectorAll('iframe').forEach(iframe => {
      iframe.addEventListener('load', function() {
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Try direct method
        try {
          if (this.contentWindow && typeof this.contentWindow.setThemeMode === 'function') {
            this.contentWindow.setThemeMode(isDarkMode);
          }
        } catch (e) {
          console.log('Could not set theme mode on iframe load:', e);
        }

        // Also use postMessage as fallback
        try {
          this.contentWindow.postMessage({
            type: 'themeMode',
            isDark: isDarkMode
          }, '*');
        } catch (e) {
          console.error('Could not post message on iframe load:', e);
        }
      });
    });
  </script>
</body>
</html>
  `;

  // Write the preview HTML to a file
  const previewHtmlPath = path.join(previewDir, "index.html");
  fs.writeFileSync(previewHtmlPath, previewHtml);

  // Open the preview HTML in the default browser
  console.log(`Opening preview at ${previewHtmlPath}`);

  // Use platform-specific approach for opening browser
  if (os.platform() === "darwin") {
    // macOS-specific approach
    try {
      // Convert file path to URL format
      const fileUrl = `file://${previewHtmlPath}`;
      // Use the 'open' command which is native to macOS
      exec(`open "${fileUrl}"`, (error) => {
        if (error) {
          console.error("Could not open browser using macOS native command:", error);
          // Fallback to the 'open' package
          open(previewHtmlPath).catch((_err) => {
            console.error(
              "Could not open browser automatically. Please open the preview manually:",
              previewHtmlPath
            );
          });
        }
      });
    } catch (error) {
      console.error("Error opening browser:", error);
      console.log(`Please open the preview manually: ${previewHtmlPath}`);
    }
  } else {
    // For non-macOS platforms, use the 'open' package
    try {
      await open(previewHtmlPath);
    } catch (error) {
      console.error(
        "Could not open browser automatically. Please open the preview manually:",
        previewHtmlPath
      );
    }
  }
}

createPreview().catch(console.error);
