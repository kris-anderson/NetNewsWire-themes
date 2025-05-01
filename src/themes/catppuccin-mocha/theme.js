/**
 * Catppuccin Mocha theme for NetNewsWire
 * Light mode: Latte
 * Dark mode: Mocha
 * Colors from: https://catppuccin.com/palette/
 */

module.exports = {
  name: "Catppuccin-Mocha",
  identifier: "com.catppuccin.nnwthemes.mocha",
  creator: "Catppuccin",
  homepage: "https://catppuccin.com",
  version: 1,

  // CSS Variables for light mode (Latte)
  lightMode: {
    "--header-table-border-color": "#4c4f6933",
    "--header-color": "#4c4f69B3",
    "--body-code-color": "#8c8fa1",
    "--system-message-color": "#ccd0da",
    "--feedlink-color": "#8c8fa1E6",
    "--article-title-color": "#4c4f69",
    "--article-date-color": "#4c4f6999",
    "--table-cell-border-color": "#dce0e8",
    "--accent-color": "#8839ef",
    "--secondary-accent-color": "#7287fd",
    "--block-quote-border-color": "#98b3eb66",
    "--bg-light-highlight": "#f5f7ff",
    "--bg-code": "#eff1f5",
    "--blockquote-text-color": "#6c6f85",
    "--background-color": "#eff1f5",
    "--text-color": "#4c4f69",
  },

  // CSS Variables for dark mode (Mocha)
  darkMode: {
    "--header-color": "#cba6f7CC",
    "--body-code-color": "#a6adc8",
    "--system-message-color": "#585b70",
    "--feedlink-color": "#cba6f7",
    "--article-title-color": "#cdd6f4",
    "--article-date-color": "#cdd6f4B3",
    "--table-cell-border-color": "#313244",
    "--accent-color": "#cba6f7",
    "--secondary-accent-color": "#89b4fa",
    "--block-quote-border-color": "#89b4fa99",
    "--header-table-border-color": "#cdd6f41A",
    "--bg-light-highlight": "#1e1e2e",
    "--blockquote-text-color": "#a6adc8",
    "--background-color": "#1e1e2e",
    "--text-color": "#cdd6f4",
  },
};
