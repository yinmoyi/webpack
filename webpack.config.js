const path = require('path')


const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports ={
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),  //指定打包好的文件放到哪个目录中去
        filename:'bundle.js'  //指定输出的文件名称
    },
    plugins:[
        new htmlWebpackPlugin({
            //创建一个在内存中生成html页面的插件
            template:path.join(__dirname,'./src/index.html'), //指定模板页面，将来会根据指定文件的路径生成内存中的页面
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}, //配置.css文件的第三方loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}, //配置.less文件的第三方loader规则
            {test:/\.(png|jpg|jpeg|gif|bmp)$/,use:'url-loader?limit=100'}, //配置图片的第三方loader规则
            {test:/\.(ttf|woff|woff2|svg|eot)$/,use:'url-loader'},  //处理字体文件loader
            // { test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'}
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}