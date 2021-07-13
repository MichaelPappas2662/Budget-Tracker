const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "/public/js/index.js",
    output: {
      path: __dirname + "/public/dist",
      filename: "bundle.js",
      publicPath: "",
    },
    mode: "production",
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }]
    },
    plugins: [
      new WebpackPwaManifest({
        filename: "manifest.json",
        inject: false,
        fingerprints: false,
  
        name: "Budget Tracker",
        short_name: "Budget Tracker",
        description: " An app that helps you track your transactions!",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
  
        icons: [
          {
            src: path.resolve(
              __dirname,
              "public/images/icons/icon-512x512.png"
              ),
            size: [32, 64, 128, 256, 512],
          }
        ]
      })
    ]
  };
  
  module.exports = config;