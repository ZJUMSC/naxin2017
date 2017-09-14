const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
    devtool: "cheap-module-source-map",
    entry: __dirname + '/src/index.tsx',
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/build',
        historyApiFallback: true,
        inline: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /(\.tsx|\.ts)$/,
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory',
                        options:
                        {
                            "presets": [
                                "react",
                                "env"
                            ],
                        }

                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'public/index.html'
        }),
    ]
}
