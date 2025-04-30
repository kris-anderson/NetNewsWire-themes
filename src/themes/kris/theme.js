/**
 * Kris theme for NetNewsWire
 * Define CSS variables used by the base Tailwind CSS
 */

module.exports = {
  name: "Kris",
  identifier: "com.krisanderson.nnwthemes.kris",
  creator: "Kris Anderson",
  homepage: "https://github.com/kris-anderson/NetNewsWire-themes",
  version: 1,

  // CSS Variables for light mode
  lightMode: {
    "--header-table-border-color": "rgba(0, 0, 0, 0.1)",
    "--header-color": "rgba(0, 0, 0, 0.3)",
    "--body-code-color": "#666",
    "--system-message-color": "#cbcbcb",
    "--feedlink-color": "rgba(255, 0, 0, 0.6)",
    "--article-title-color": "#333",
    "--article-date-color": "rgba(0, 0, 0, 0.3)",
    "--table-cell-border-color": "lightgray",
    "--accent-color": "rgba(8, 106, 238, 1)",
    "--secondary-accent-color": "#086aee",
    "--block-quote-border-color": "rgba(8, 106, 238, 0.5)",
    "--bg-light-highlight": "#f2f2f2",
    "--bg-code": "color(srgb 0.947 0.947 0.947)",
    "--blockquote-text-color": "#505050",
    "--background-color": "white",
    "--text-color": "#333",
  },

  // CSS Variables for dark mode
  darkMode: {
    "--header-color": "rgba(94, 158, 244, 1)",
    "--body-code-color": "#b2b2b2",
    "--system-message-color": "#5f5f5f",
    "--feedlink-color": "rgba(94, 158, 244, 1)",
    "--article-title-color": "#e0e0e0",
    "--article-date-color": "rgba(255, 255, 255, 0.5)",
    "--table-cell-border-color": "dimgray",
    "--accent-color": "rgba(94, 158, 244, 1)",
    "--secondary-accent-color": "#5e9ef4",
    "--block-quote-border-color": "rgba(94, 158, 244, 0.75)",
    "--header-table-border-color": "rgba(255, 255, 255, 0.1)",
    "--bg-light-highlight": "rgba(49, 49, 49, 1)",
    "--blockquote-text-color": "rgba(195, 195, 195, 1)",
    "--background-color": "#222",
    "--text-color": "#e0e0e0",
  },
};
