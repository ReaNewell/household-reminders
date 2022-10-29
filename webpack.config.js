const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return {
        entry: './client/src/app.js',
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css"
            })
        ],
        output: {
            path: path.join(__dirname, 'client', 'public', 'dist'),
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: path.join(__dirname, 'client', 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};