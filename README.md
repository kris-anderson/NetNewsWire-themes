# NetNewsWire Themes

This repository contains themes for [NetNewsWire](https://netnewswire.com/), an RSS reader for macOS and iOS. The themes are built using Tailwind CSS for maintainable styling.

![Theme Previews](https://github.com/kris-anderson/NetNewsWire-themes/assets/preview.png)

## Theme Structure

The project is structured to allow easy creation of multiple themes while sharing common HTML structure:

- `src/templates/template.html`: Common HTML template for all themes
- `src/css/base.css`: Shared Tailwind CSS styles for all themes
- `src/themes/`: Each theme has its own folder with specific color schemes
  - `src/themes/theme-name/theme.js`: Theme configuration including colors

## Building Themes

This project uses Gulp and Tailwind CSS to build theme files. Each theme is compiled into its own `.nnwtheme` folder in the `build` directory.

### Prerequisites

- Node.js (v20 or later recommended) and npm

### Setup

```bash
# Install dependencies
npm install
```

### Building

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

## Creating a New Theme

To create a new theme:

1. Create a new folder in `src/themes/` with your theme name (e.g., `src/themes/my-awesome-theme/`)
2. Create a `theme.js` file in your theme folder based on the example below:

```javascript
module.exports = {
  name: "MyAwesomeTheme", // This will be the folder name: MyAwesomeTheme.nnwtheme
  identifier: "com.yourdomain.nnwthemes.my-awesome-theme",
  creator: "Your Name",
  homepage: "https://github.com/yourusername/NetNewsWire-themes",
  version: 1,

  // CSS Variables for light mode
  lightMode: {
    // Base colors
    "--background-color": "#ffffff",
    "--text-color": "#333333",
    "--accent-color": "#0066cc",
    "--secondary-accent-color": "#0055aa",

    // Article elements
    "--article-title-color": "#000000",
    "--article-date-color": "#666666",
    "--blockquote-text-color": "#333333",
    "--body-code-color": "#666666",
    "--feedlink-color": "#cc0000",

    // Borders and backgrounds
    "--header-table-border-color": "rgba(0, 0, 0, 0.1)",
    "--table-cell-border-color": "#dddddd",
    "--header-color": "#999999",
    "--block-quote-border-color": "rgba(0, 0, 0, 0.2)",
    "--bg-light-highlight": "#f5f5f5",
    "--bg-code": "#f0f0f0",
  },

  // CSS Variables for dark mode
  darkMode: {
    // Base colors
    "--background-color": "#222222",
    "--text-color": "#e0e0e0",
    "--accent-color": "#5c9aff",
    "--secondary-accent-color": "#5e9ef4",

    // Article elements
    "--article-title-color": "#ffffff",
    "--article-date-color": "#bbbbbb",
    "--blockquote-text-color": "#cccccc",
    "--body-code-color": "#b2b2b2",
    "--feedlink-color": "#5e9ef4",

    // Borders and backgrounds
    "--header-table-border-color": "rgba(255, 255, 255, 0.1)",
    "--table-cell-border-color": "#444444",
    "--header-color": "#888888",
    "--block-quote-border-color": "rgba(255, 255, 255, 0.2)",
    "--bg-light-highlight": "#333333",
    "--bg-code": "#2a2a2a",
  },
};
```

3. Run `npm run build` to generate your theme
4. Preview your theme using `npm run preview`

## CSS Variables Reference

NetNewsWire themes use CSS variables to define colors and styles. Here's a complete reference:

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
| `--header-table-border-color` | Border color for header tables         |
| `--system-message-color`      | Color for system messages              |

## Contributing

Contributions are welcome! If you'd like to contribute a theme:

1. Fork this repository
2. Create a new theme following the guidelines above
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
