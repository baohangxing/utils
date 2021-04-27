const webpack = require('webpack');
const path = require('path');

const pkg = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

const config = {
    mode: 'none',
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.name}.js`,
        path: path.resolve(rootPath, 'min'),
        library: `${pkg.name}`,
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {},
            },
        ],
    },
};

module.exports = config;
