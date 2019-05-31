##  webpack本地安装
-   安装本地的webpack
-   webpack webpack-cli -D


##  webpack可以进行0配置
-   打包工具  ->  输出后的结果（js模块）
-   打包（支持我们的js的模块化）

##  手动配置webpack
-   默认配置文件的名字  webpack.config.js
-   手动指定配置文件：npx webpack --config <fileName>
-   package.json配置:
-      "scripts": {
-        "build": "webpack --config webpack.config.my.js"
-      },
-       npm run build
-   or
-       npm run build -- --config webpack.config.my.js

## html本地服务器
-   yarn add webpack-dev-server -D
-   or
-   npx webpack-dev-server  //打包在内存中

- package.json配置，webpack.config.js配置，npm dev run

