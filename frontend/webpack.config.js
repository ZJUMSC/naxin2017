const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    module: {
        rules: [
            {
                test: /(\.jsx|\.tsx|\.ts)$/,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
