const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports =
{

	entry: 
    {
    	app: "./src/index.js"
    },

	output: 
    {
    	path: path.resolve(__dirname, "./dist"),
    	filename: "bundle.js",
    	publicPath: "/"
    },

	resolve: {
		extensions: [".js", ".jsx"],
	},

	plugins:
        [
        	new HtmlWebpackPlugin({
        		template: "./public/index.html",
        		filename: "./index.html",
        	})
        ],

	module:
        {
        	rules:
            [
            	{
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
            	}
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