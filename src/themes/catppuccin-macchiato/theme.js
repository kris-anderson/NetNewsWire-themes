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

  // CSS Variables for dark mode (Macchiato)
  darkMode: {
    "--header-color": "#cba6f7CC",
    "--body-code-color": "#a5adcb",
    "--system-message-color": "#5b6078",
    "--feedlink-color": "#cba6f7",
    "--article-title-color": "#cad3f5",
    "--article-date-color": "#cad3f5B3",
    "--table-cell-border-color": "#363a4f",
    "--accent-color": "#c6a0f6",
    "--secondary-accent-color": "#8aadf4",
    "--block-quote-border-color": "#8aadf499",
    "--header-table-border-color": "#cad3f51A",
    "--bg-light-highlight": "#24273a",
    "--blockquote-text-color": "#a5adcb",
    "--background-color": "#24273a",
    "--text-color": "#cad3f5",
  },
};
