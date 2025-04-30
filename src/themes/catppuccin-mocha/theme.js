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
    "--header-table-border-color": "rgba(76, 79, 105, 0.2)",
    "--header-color": "rgba(76, 79, 105, 0.7)",
    "--body-code-color": "#8c8fa1",
    "--system-message-color": "#ccd0da",
    "--feedlink-color": "rgba(140, 143, 161, 0.9)",
    "--article-title-color": "#4c4f69",
    "--article-date-color": "rgba(76, 79, 105, 0.6)",
    "--table-cell-border-color": "#dce0e8",
    "--accent-color": "#8839ef",
    "--secondary-accent-color": "#7287fd",
    "--block-quote-border-color": "rgba(152, 179, 235, 0.4)",
    "--bg-light-highlight": "#f5f7ff",
    "--bg-code": "#eff1f5",
    "--blockquote-text-color": "#6c6f85",
    "--background-color": "#eff1f5",
    "--text-color": "#4c4f69",
  },

  // CSS Variables for dark mode (Mocha)
  darkMode: {
    "--header-color": "rgba(203, 166, 247, 0.8)",
    "--body-code-color": "#a6adc8",
    "--system-message-color": "#45475a",
    "--feedlink-color": "rgba(203, 166, 247, 1)",
    "--article-title-color": "#cdd6f4",
    "--article-date-color": "rgba(205, 214, 244, 0.7)",
    "--table-cell-border-color": "#313244",
    "--accent-color": "#cba6f7",
    "--secondary-accent-color": "#89b4fa",
    "--block-quote-border-color": "rgba(137, 180, 250, 0.6)",
    "--header-table-border-color": "rgba(205, 214, 244, 0.1)",
    "--bg-light-highlight": "#1e1e2e",
    "--blockquote-text-color": "#a6adc8",
    "--background-color": "#11111b",
    "--text-color": "#cdd6f4",
  },
};
