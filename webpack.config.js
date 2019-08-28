const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
    publicPath: "/build/"
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
