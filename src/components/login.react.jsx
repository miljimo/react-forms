var React = require("react");
var Button    = require("./button.react.jsx");
var LineEdit  = require("./lineedit.react.jsx");

var cssStyle= require("../assets/css/login.react.css");



var Login= React.createClass({

    getDefaultProps:(function(){
    	return {url:null};

    }),
	getInitialState:(function(){

		return {isUrlSet:false,inProgress:false};

	}),
	render:(function(){

		var style =Object.assign({

			username:{
				 borderTopLeftRadius:"5px",
				 borderTopRightRadius:"5px",
			},
			password:{
				borderBottomLeftRadius:"5px",
				borderBottomRightRadius:"5px",

			}

		},
		this.props.style);
    
       return (<div 
       			className ={cssStyle.login + " "+this.props.className}
       			style={style}>
       			<LineEdit onTextChange={__onTextChange.bind(this)} label={this.props.uLabel || "Username or Email"} type='text'  style={style.username}  className={cssStyle.lineEdit}/>
       			<LineEdit label={this.props.pLabel || "Password"}  type='password' style={style.password} className={cssStyle.lineEdit}/>
       			<Button  className={cssStyle.button} onClick={__onSubmit.bind(this)} > Log In </Button>
       	  </div>)

	})

});




var __onSubmit  =(function(sender, event){

	console.log(event)

})


var __onTextChange  =(function(sender, event){

console.log(event.currentText)

})


module.exports  = Login;
