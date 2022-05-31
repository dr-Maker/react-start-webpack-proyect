const HtmlWebpackPlugin = require("html-webpack-plugin");
//const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const jsRules  = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: "babel-loader",
		options: {
			presets: [
				"@babel/preset-env",
				"@babel/preset-react"
			]
		}
	}
};


module.exports =
{

	plugins:
        [
        	new HtmlWebpackPlugin({
        		template: "./public/index.html"
        	}),

        	new CleanWebpackPlugin(),
        ],

	module:
        {
        	rules:
            [
            	jsRules,
            ]
        },
	devServer: 
        {
        	historyApiFallback: {
        		disableDotRule: true
        	},
        	liveReload: true,   
        	open: true,
        	port: 8000
        },
};