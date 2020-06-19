const path = require('path');

module.exports = {
    entry: './examples/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../examples/dist')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
}
