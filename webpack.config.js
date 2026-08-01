const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: {
            main: './src/assets/js/main.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime'],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'postcss-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/assets/images', to: 'images' },
                ],
            }),
        ],
        optimization: {
            minimizer: [
                `...`,
                new CssMinimizerPlugin(),
            ],
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
    };
};
