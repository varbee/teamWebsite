var path = require('path'),
    webpack = require('webpack'),
    px2rem=require('postcss-px2rem'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080/',
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'), // webpack 本地打包路径
        filename: "bundle.js",
        // 线上发布路径，和path最好保持一致，html页面引入script路径
        publicPath: '/dist/'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                // loader: "style-loader!css-loader!postcss-loader"
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
                 // loader: 'style!css!px2rem?remUnit=75&remPrecision=8'
            },
            {
                test: /\.scss$/, 
                loader: 'style!css!sass?sourceMap'

            },
            { 
                test: /\.js$/,
                loader: 'babel',
                // 可以单独在当前目录下配置.babelrc，也可以在这里配置
                query: {
                  presets: ['es2015']
                },
                // 排除 node_modules 下不需要转换的文件，可以加快编译
                exclude: /node_modules/
            },
            { 
                test: /\.(png|jpg|gif)$/, 
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.tpl$/,
                loader: 'mustache'
            }
        ]
    },
    postcss: function() {
    return [px2rem({remUnit: 75})];
    },
   
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery":"jquery"
        }),
        new ExtractTextPlugin('[name].css')
    ],
};