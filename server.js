var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  inline: true,
  stats: {
    colors: true
  },
  contentBase: 'build'
}).listen(8080, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});
