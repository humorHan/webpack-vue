/**
 * Created by humorHan on 2016/6/17.
 */
var webpack = require('webpack');
var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

/**
 * webpack 配置
 * @param isWatch 监听模式包括watch和cache参数
 * @param isDev   调试模式
 * @param isRev   压缩
 */
module.exports = function (isWatch, isDev, isRev) {
    return {
        watch: isWatch,
        devtool: isDev ? "#inline-source-map" : null,//eval-source-map
        //entry:  path.join(__dirname,'/src/js/main.js'),
        output: {
            path: path.join(__dirname, 'bundle', 'js'),
            publicPath: '/ResourceDashBoard/bundle/js/',
            filename: '[name].js',
            chunkFilename: '[name].chunk.js'
        },
        module: {
            loaders: [
                { test: /\.vue$/, loader: 'vue' },
                { test: /\.css$/, loader: "style!css" },
                { test: /\.less$/, loader: "style!css!less" },
                { test: /\.tpl$/, loader: 'tmodjs-loader' },
                { test: /\.(png|jpeg|jpg|gif)$/, loader: 'url?limit=8192' },
                { test: /^es5-sham\.min\.js|es5-shim\.min\.js$/, loader: 'script', exclude: node_modules }
            ]
        },
        cache: isWatch,
        resolve: {
            root: [path.join(__dirname, '/src/js'), path.join(__dirname, '/src/components'), path.join(__dirname, '/src/dep')],
            extensions: ['.js', '.tpl', '.less', '.json', '.vue', ''],
            modulesDirectories: ['dep', 'tpl', 'node_modules'],
            alias: {
                'mock': 'mock.js'
            }
        },
        /*babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        },*/
       /* vue: {
            loaders: {
               /!* css: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?sourceMap",
                    {
                        publicPath: path.join(__dirname, 'bundle', 'css')
                    }
                )*!/
                css: ExtractTextPlugin.extract("css"),
                less: ExtractTextPlugin.extract("css!less-loader")
            }
        },*/
        plugins: (function () {
            if (isRev) {
                return [
                    new webpack.optimize.UglifyJsPlugin({
                        compress: {
                            warnings: false
                        }
                    }),
                    new webpack.optimize.CommonsChunkPlugin({
                        name: "vendor",
                        filename: "vendor.js",
                        minChunks: 5 //Infinity
                    })
                ]
            } else {
                return [
                    new webpack.optimize.CommonsChunkPlugin({
                        name: "vendor",
                        filename: "vendor.js",
                        minChunks: Infinity
                    })
                ]
            }
        })(),
        externals: {
            'jquery': '$'
        }
    }
};