const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.j|tsx?$/, 
        use: "ts-loader" 
      },
       { test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      
      ]

  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
