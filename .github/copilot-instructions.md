# GitHub Copilot Instructions for NetNewsWire Themes

This document provides instructions and context to help GitHub Copilot understand and assist with the NetNewsWire themes repository.

## Repository Purpose

This repository contains themes for [NetNewsWire](https://netnewswire.com/), an RSS reader for macOS and iOS. The themes define the appearance of articles within the app, with support for both light and dark modes. The themes are built using Tailwind CSS for maintainable styling.

## Project Structure

- `src/templates/template.html`: Common HTML template used for all themes
- `src/css/base.css`: Shared Tailwind CSS styles for all themes
- `src/css/comprehensive-base.css`: Fallback CSS used when Tailwind processing fails
- `src/themes/`: Each theme has its own folder with specific color schemes
  - `src/themes/theme-name/theme.js`: Theme configuration including colors
- `gulpfile.js`: Contains the build logic for processing themes
- `preview/`: Contains HTML files for previewing themes in a browser

## Theme Configuration

Each `theme.js` file exports an object with the following properties:

```javascript
module.exports = {
  name: "ThemeName", // This will be the folder name: ThemeName.nnwtheme
  identifier: "com.example.nnwthemes.theme-name",
  creator: "Your Name",
  homepage: "https://github.com/yourusername/NetNewsWire-themes",
  version: 1,

  // CSS Variables for light mode
  lightMode: {
    "--background-color": "#ffffff",
    "--text-color": "#333333",
    // ... other CSS variables
  },

  // CSS Variables for dark mode
  darkMode: {
    "--background-color": "#222222",
    "--text-color": "#e0e0e0",
    // ... other CSS variables
  },
};
```

## CSS Variables Reference

The theme system uses CSS variables to define colors and styles. Here's a complete reference:

| Variable Name                 | Description                            |
| ----------------------------- | -------------------------------------- |
| `--background-color`          | Main background color for the theme    |
| `--text-color`                | Main text color for articles           |
| `--accent-color`              | Primary accent color (links, etc.)     |
| `--secondary-accent-color`    | Secondary accent color (borders, etc.) |
| `--article-title-color`       | Color for article titles               |
| `--article-date-color`        | Color for article dates                |
| `--blockquote-text-color`     | Text color for blockquotes             |
| `--body-code-color`           | Text color for inline code             |
| `--feedlink-color`            | Color for feed links                   |
| `--header-table-border-color` | Border color for header tables         |
| `--table-cell-border-color`   | Border color for table cells           |
| `--header-color`              | Text color for headers                 |
| `--block-quote-border-color`  | Border color for blockquotes           |
| `--bg-light-highlight`        | Background color for highlighted areas |
| `--bg-code`                   | Background color for code blocks       |
| `--system-message-color`      | Color for system messages              |

## Build Process

The build process uses Gulp and Tailwind CSS:

1. It reads the theme configuration from each `theme.js` file
2. Generates CSS variables based on the configuration
3. Combines the variables with base Tailwind CSS
4. Processes the CSS with Tailwind to generate the final stylesheet
5. Creates an `Info.plist` file with theme metadata
6. Copies the template HTML file
7. Packages everything into a `.nnwtheme` folder in the `build` directory

## Development Workflow

1. Create a new theme folder in `src/themes/`
2. Create a `theme.js` file based on existing examples
3. Run `npm run build` to build your theme
4. Use `npm run preview` to view your theme in a browser
5. Once satisfied, you can install the built `.nnwtheme` file in NetNewsWire

## Common Tasks

### Creating a New Theme

1. Duplicate an existing theme folder in `src/themes/`
2. Rename the folder to your theme name (use kebab-case)
3. Modify the `theme.js` file with your theme information and colors
4. Run `npm run build` to generate your theme
5. Preview it with `npm run preview`

### Modifying an Existing Theme

1. Edit the corresponding `theme.js` file in `src/themes/`
2. Run `npm run build` to rebuild the theme
3. Preview the changes with `npm run preview`

### Running the Build Process

```bash
# Build all themes
npm run build

# Watch for changes and rebuild automatically
npm run watch

# Start build process and watch for changes (same as above)
npm start

# Clean the build directory
npm run clean

# Format code with Prettier
npm run format

# Lint code with ESLint
npm run lint

# Preview themes in browser
npm run preview
```

### Theme Installation in NetNewsWire

After building, `.nnwtheme` files can be installed in NetNewsWire by:

- Double-clicking the `.nnwtheme` folder
- Adding them to `~/Library/Containers/com.ranchero.NetNewsWire-Evergreen/Data/Library/Application Support/NetNewsWire/Themes/`

## Tips for Working with This Repository

1. Use the existing themes as a reference when creating new ones
2. Test both light and dark modes when developing themes
3. When modifying the base CSS, be mindful of how it might affect all themes
4. Remember that themes need to work on both macOS and iOS, which have different rendering characteristics
5. The preview tool is helpful but always test in the actual NetNewsWire app for final verification
