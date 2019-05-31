// webpack 是node写出来的，支持node写法

let path = require('path');

module.exports = {
    mode: 'development',//模式， 两种 production（默认，会压缩代码）   development
    entry: './src/index.js',   //入口
    output: {
        filename: 'bundle.js',    //打包后的文件名
        path: path.resolve(__dirname, 'dist'), //首先要引入模块，其次该模块为默认模块，重要的一点是路径是绝对路径,path.resolve可以把相对路径解析为绝对路径,__dirname表示为当前目录
    }
}