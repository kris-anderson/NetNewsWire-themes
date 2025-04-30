/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/templates/**/*.html", "./src/themes/**/*.js", "./src/templates/template.html"],
  theme: {
    extend: {
      colors: {
        // Default colors that can be overridden by themes
        background: "var(--background-color)",
        text: "var(--text-color)",
        accent: "var(--accent-color)",
        "secondary-accent": "var(--secondary-accent-color)",
        header: "var(--header-color)",
        "body-code": "var(--body-code-color)",
        "article-title": "var(--article-title-color)",
        "article-date": "var(--article-date-color)",
        feedlink: "var(--feedlink-color)",
        "blockquote-border": "var(--block-quote-border-color)",
        "blockquote-text": "var(--blockquote-text-color)",
        "bg-light-highlight": "var(--bg-light-highlight)",
        "bg-code": "var(--bg-code)",
        "table-cell-border": "var(--table-cell-border-color)",
        "header-table-border": "var(--header-table-border-color)",
      },
    },
  },
  plugins: [],
  // Enable dark mode based on system preferences
  darkMode: "media",
};
