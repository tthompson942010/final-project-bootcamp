module.exports = {
  
  // This code will be compiled 
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 8100
  },
  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // These are the specific transformations we'll be using. 
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}