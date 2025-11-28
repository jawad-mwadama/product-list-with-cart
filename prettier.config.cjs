// prettier.config.cjs
const path = require("path");

module.exports = {
  // 1. Explicitly loads the plugin using the most stable path resolver
  plugins: [require.resolve("prettier-plugin-tailwindcss")],

  // 2. REQUIRED for Tailwind CSS v4 to correctly load class order
  // Assuming your main CSS file (with @tailwind directives) is in src/index.css
  tailwindStylesheet: path.join(__dirname, "./src/index.css"),

  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,
  bracketSpacing: true,
  arrowParens: "always",
  jsxSingleQuote: false,
  bracketSameLine: false,
};
