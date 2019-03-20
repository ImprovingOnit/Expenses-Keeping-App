const path = require('path')


module.exports = {
    entry: './src/reducers/expenseReducer.js',
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'cheap-module-eval-source-map'
}

