
var React     = require("react");
var Button    = require("./components/button.react.jsx");
var LineEdit  = require("./components/lineedit.react.jsx");
var Login     = require("./components/login.react.jsx");



var AppTest  = React.createClass({

	render:(function(){
		  return (<div>	
              <Login />
		  </div>);
	})
});




module.exports ={
	 "AppTest":AppTest,
	 "Button":Button,

	};

