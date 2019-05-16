const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';
  // const CSSExtract = new MiniCssExtractPlugin('styles.css');
  const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
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
					use: CSSExtract.extract({
            use: [
              'css-loader',
              'sass-loader'
            ]
          })
				}
			]
    },
    plugins: [
      CSSExtract
    ],
		mode: 'development',
		devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true
		}
	};
};

