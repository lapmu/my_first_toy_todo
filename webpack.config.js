const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js',
        publicPath: "/docs/"
    },
    devServer: {
        contentBase:path.join(__dirname + "/docs/"),
        inline: true,
        hot: true,
        host: "localhost",
        port: 5500,
        historyApiFallback: true,
      },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }
                }
                
            },
            {
                test: /\.css$/,
                use : ["style-loader", "css-loader"],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
    })],
    mode: 'production'
}