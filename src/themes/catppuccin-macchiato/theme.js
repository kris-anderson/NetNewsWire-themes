/**
 * Catppuccin Macchiato theme for NetNewsWire
 * Light mode: Latte
 * Dark mode: Macchiato
 * Colors from: https://catppuccin.com/palette/
 */

module.exports = {
  name: "Catppuccin-Macchiato",
  identifier: "com.catppuccin.nnwthemes.macchiato",
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

  // CSS Variables for dark mode (Macchiato)
  darkMode: {
    "--header-color": "rgba(203, 166, 247, 0.8)",
    "--body-code-color": "#a5adcb",
    "--system-message-color": "#5b6078",
    "--feedlink-color": "rgba(203, 166, 247, 1)",
    "--article-title-color": "#cad3f5",
    "--article-date-color": "rgba(202, 211, 245, 0.7)",
    "--table-cell-border-color": "#363a4f",
    "--accent-color": "#c6a0f6",
    "--secondary-accent-color": "#8aadf4",
    "--block-quote-border-color": "rgba(138, 173, 244, 0.6)",
    "--header-table-border-color": "rgba(202, 211, 245, 0.1)",
    "--bg-light-highlight": "#24273a",
    "--blockquote-text-color": "#a5adcb",
    "--background-color": "#181926",
    "--text-color": "#cad3f5",
  },
};
