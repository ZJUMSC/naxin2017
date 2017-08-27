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
        //historyApiFallback: true,
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
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        // options: {
                        //     getCustomTransformers: () => ({
                        //         before: [tsImportPluginFactory({ libraryName: "antd", style: "css" }), tsImportPluginFactory({ libraryName: "antd"})]
                        //     })
                        // }
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
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
            title: 'MSC@ZJU naxin 2017',
            template: 'public/index.html'
        })
    ]
}
