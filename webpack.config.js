const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'superior-slider.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SuperiorSlider',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'production',
};
