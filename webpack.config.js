

var path  = require("path");

const BUILD_DIR = path.resolve(__dirname+"/build/");
const HOME_DIR  = path.resolve(__dirname+"/src/");

module.exports ={

	    "entry":HOME_DIR+"/entry.jsx",
	    "output":{
	    	"filename":"index.js",
	    	"path":BUILD_DIR,
	    },
	    "module":{
	    	 loaders:[
				    { test: /\.css$/, loader: "style-loader!css-loader" },
		            { test: /\.png$/, loader: "url-loader?limit=100000" },
		         	{ test: /\.jpg$/, loader: "file-loader" },
				//the react loader
				  	{
					  	test:/\.jsx?$/,
					  	exclude:/node_modules/,
					  	loader:"babel",
					  	query:{
					  		presets:["es2015", "react"]
					  	}

				  	}

		 ]
	    }
};
