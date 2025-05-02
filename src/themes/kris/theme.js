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
    "--header-table-border-color": "#D8D9DD",
    "--header-color": "#7e7f82",
    "--body-code-color": "#666666",
    "--system-message-color": "#cbcbcb",
    "--feedlink-color": "#EC7E76",
    "--article-title-color": "#333333",
    "--article-date-color": "#797d80",
    "--table-cell-border-color": "#d3d3d3",
    "--accent-color": "#086AEE",
    "--secondary-accent-color": "#086aee",
    "--block-quote-border-color": "#8EACED",
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
    "--article-date-color": "#F7F8FA",
    "--table-cell-border-color": "#696969",
    "--accent-color": "#5E9EF4",
    "--secondary-accent-color": "#5e9ef4",
    "--block-quote-border-color": "#8EB1EF",
    "--header-table-border-color": "#F1F2F6",
    "--bg-light-highlight": "#313131",
    "--blockquote-text-color": "#c3c3c3",
    "--background-color": "#222222",
    "--text-color": "#e0e0e0",
  },
};
