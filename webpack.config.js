const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'superior-slider.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SuperiorSlider', 
    libraryTarget: 'umd', 
  },
  mode: 'production'
};
