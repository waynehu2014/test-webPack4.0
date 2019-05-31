// webpack 是node写出来的，支持node写法

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devServer:{
    //     //开发服务器配置
    //     port: 3000,
    //     progress: true, //进度条显示
    //     contentBase: './dist',  //运行指定目录
    //     compress: true  //压缩
    // },
    mode: 'development',//模式， 两种 production（默认，会压缩代码）   development
    entry: './src/index.js',   //入口
    output: {
        filename: 'bundle.[hash:8].js',    //打包后的文件名，bundle.js，加hash,:8只显示8位
        path: path.resolve(__dirname, 'dist'), //首先要引入模块，其次该模块为默认模块，重要的一点是路径是绝对路径,path.resolve可以把相对路径解析为绝对路径,__dirname表示为当前目录
    },
    plugins: [   //数组  放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',   //指明模板
            filename: 'index.html',  //打包出来的文件名
            minify: {
                removeAttributeQuotes: true,    //删除双引号
                collapseWhitespace: true,   //变成一行
            },
            hash: true, //防缓存
        })
    ],
    module: {   //模块
        rules: [ //规则  css-loader 接续 @import这种语法的
            //style-loader 把css插入到head标签中
            // loader的特点 希望单一
            // loder的用法 字符串只用一个loader
            // 多个loader需要[]
            // loder的顺序 默认是从右向左执行,写成对象的模式可以传参数
            {
                test: /\.css$/, use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                }, 'css-loader']
            },
            {
                // 可以处理less文件    sass stylus node-sass   sass-loader
                // stylus   stylus-loader
                test: /\.less$/, use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                },
                    'css-loader',   
                    'less-loader'   //把 less  ->  css
                ]
            }
        ]
    }
}