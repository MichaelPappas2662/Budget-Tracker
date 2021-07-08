const config = {
    entry: "/public/js/index.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
      publicPath: '/'
    },
    mode: "production"
  };

  module.exports = config;