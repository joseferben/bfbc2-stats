const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['./entry.js'],
    output: {
        path: path.join(__dirname, '/app'),
        filename: 'bundle.js',
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './app',
        proxy: {
            '/api/*': {
                target: 'http://localhost:8081/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },

    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

    module: {
        preLoaders: [{
            test: /\.tag$/,
            exclude: /node_modules/,
            loader: 'riotjs-loader',
            query: {
                type: 'none',
            },
        }],
        loaders: [{
            test: /\.js$|\.tag$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&retainLines=true',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.html$/,
            loader: 'raw-loader',
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=1000000',
        }, {
            test: /\.jpg$/,
            loader: 'file-loader',
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff',
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream',
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file',
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml',
        }, {
            test: /jquery/,
            loader: 'expose?$!expose?jQuery',
        }, {
            test: /\.json$/,
            loader: 'json',
        }],
    },
};
