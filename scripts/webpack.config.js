const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'zly-v.js',
        path: path.resolve(__dirname, '../dist')
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
