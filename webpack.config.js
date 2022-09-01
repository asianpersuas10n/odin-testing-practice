const path = require("path");

module.exports = {
  entry: "./src/practice.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
