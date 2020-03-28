const path = require('path');
/*把html加载到web-dev-server内存中*/
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new htmlWebpackPlugin({
  /*指定源文件*/
  template: path.join(__dirname, './src/index.html'), /*指定编译后的文件名*/
  filename: 'index.html'
});
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.jsx'),
  plugins: [htmlPlugin],
  module: {
    /*添加一个loader，babel是jsx转js语法的*/
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }, /*import的时候不用加扩展名了，webpack自动*/
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      /*配置一个别名，import的时候使用'@'可以直接指定到如下的路径*/
      '@': path.join(__dirname, './src')
    }
  }
};
console.log(path.join(__dirname, '/node_modules/'));
console.log(__dirname);