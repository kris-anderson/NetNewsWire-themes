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
    "--header-table-border-color": "#00000019",
    "--header-color": "#333333", // Changed from #0000004D to increase contrast
    "--body-code-color": "#666666",
    "--system-message-color": "#cbcbcb",
    "--feedlink-color": "#FF00009A",
    "--article-title-color": "#333333",
    "--article-date-color": "#0000004D",
    "--table-cell-border-color": "#d3d3d3",
    "--accent-color": "#086AEE",
    "--secondary-accent-color": "#086aee",
    "--block-quote-border-color": "#086AEE80",
    "--bg-light-highlight": "#f2f2f2",
    "--bg-code": "#f2f2f2",
    "--blockquote-text-color": "#505050",
    "--background-color": "#ffffff",
    "--text-color": "#333333",
  },

  // CSS Variables for dark mode
  darkMode: {
    "--header-color": "#5E9EF4",
    "--body-code-color": "#b2b2b2",
    "--system-message-color": "#5f5f5f",
    "--feedlink-color": "#5E9EF4",
    "--article-title-color": "#e0e0e0",
    "--article-date-color": "#ffffff80",
    "--table-cell-border-color": "#696969",
    "--accent-color": "#5E9EF4",
    "--secondary-accent-color": "#5e9ef4",
    "--block-quote-border-color": "#5E9EF4BF",
    "--header-table-border-color": "#ffffff1A",
    "--bg-light-highlight": "#313131",
    "--blockquote-text-color": "#c3c3c3",
    "--background-color": "#222222",
    "--text-color": "#e0e0e0",
  },
};
