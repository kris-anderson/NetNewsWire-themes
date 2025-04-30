/**
 * Catppuccin Frappe theme for NetNewsWire
 * Light mode: Latte
 * Dark mode: Frappé
 * Colors from: https://catppuccin.com/palette/
 */

module.exports = {
  name: "Catppuccin-Frappe",
  identifier: "com.catppuccin.nnwthemes.frappe",
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

  // CSS Variables for dark mode (Frappé)
  darkMode: {
    "--header-color": "rgba(198, 208, 245, 0.8)",
    "--body-code-color": "#a5adce",
    "--system-message-color": "#626880",
    "--feedlink-color": "rgba(198, 208, 245, 1)",
    "--article-title-color": "#c6d0f5",
    "--article-date-color": "rgba(198, 208, 245, 0.7)",
    "--table-cell-border-color": "#414559",
    "--accent-color": "#ca9ee6",
    "--secondary-accent-color": "#8caaee",
    "--block-quote-border-color": "rgba(140, 170, 238, 0.6)",
    "--header-table-border-color": "rgba(198, 208, 245, 0.1)",
    "--bg-light-highlight": "#303446",
    "--blockquote-text-color": "#a5adce",
    "--background-color": "#232634",
    "--text-color": "#c6d0f5",
  },
};
