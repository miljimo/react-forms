/**
 The file is path of the react-form components
*/

var React =require("react");
var cssStyle = require("../assets/css/button.react.css");


var Button = React.createClass({
	getDefaultProps:(function(){
		return {disabled:false}
	}),
	 getInitialState:(function(){
	     return {pressed :false};
	  }),
	render:(function(){
		var flat = (this.state.pressed)?"0px 4px 8px 0px rgba(0,0,0,0.2)":null;
        var hasIcon  = (this.props.icon)?true:false;
        var cssDiasabled  = (this.props.disabled)?cssStyle.disabled:"";
        console.log(cssDiasabled );
		var style=Object.assign({
			

		},this.props.style);

        var defaultClassName  =cssStyle.button;
		var className  = defaultClassName+" "+cssDiasabled+" "+(this.props.className || "");
		 return (
		 	 <input 
		 	      className={className}
		 	      type='button'  
		 	      value={this.props.children || ""}
		 	      style={style} 
		 	      disabled={this.props.disabled?"disabled":""}
		 	      onMouseEnter={__mouseEnter.bind(this)}
		 	      onMouseLeave={__mouseLeave.bind(this)}
		 	      onMouseDown={__mouseDown.bind(this)}  
		 	      onMouseUp={__mouseUp.bind(this)} 
		 	      onClick={__onClicked.bind(this)}
		 	  />
		 	);
	})
});



/**
Private methods
*/
var __mouseLeave=(function(event){
	var event  = event || window.event;
	if(event)event.preventDefault();	
	if(this.props.disabled)return;
	if(this.props.onMouseLeave)
	{
	  event.eventKey  = this.props.eventKey;
	  this.props.onMouseLeave(this,event);
	}
})
var __mouseEnter=(function(event){
	var event  = event || window.event;
	if(event)event.preventDefault();
	if(this.props.disabled)return;
	if(this.props.onMouseEnter){
		event.eventKey  = this.props.eventKey;
		this.props.onMouseEnter(this, event);
	}

})
var __mouseUp=(function(event){
	var event  = event || window.event;
	if(event)event.preventDefault();
	if(this.props.disabled)return;
	if(this.props.onMouseUp){
		event.eventKey  = this.props.eventKey;
		this.props.onMouseUp(this, event);
	}

})

var __mouseDown=(function(event){
	var event  = event || window.event;
	if(event)event.preventDefault();
	if(this.props.disabled)return;
	if(this.props.onMouseUp){
		event.eventKey  = this.props.eventKey;
		this.props.onMouseDown(this,event);
	}

})
var __onClicked =(function(event){
	var event  = event || window.event;
	if(event)event.preventDefault();
  if(this.props.disabled)return;
  if(this.props.onClick){
  	event.eventKey  = this.props.eventKey;
  	this.props.onClick(this, event);
  }
})
module.exports = Button;