let path = require('path');
module.exports = {
    entry: "./example.js",
    output: {
        path: __dirname,
        filename: 'compiled.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
