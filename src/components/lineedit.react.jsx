var React =require("react");
var cssStyle  = require("../assets/css/lineedit.react.css");

var LineEdit=React.createClass({

	 render:(function(){
	 	
	 	 var type =__getType.call(this);

	 	 var style=Object.assign({


	 	 },this.props.style);

	 	 return(
	 	 	  <input 
	 	 	        className={cssStyle.lineEdit +" "+ (this.props.className || "")}
	 	 	  		name ={this.props.name} 
	 	 	  		id={this.props.name} 
	 	 	  		onFocus={__onFocus.bind(this)}
	 	 	  		onBlur={__blur.bind(this)} 
	 	 	  		onKeyPress={__keypress.bind(this)}
	 	 	  		type={type} 
	 	 	  		value={this.props.text} 
	 	 	  		style={style} 
	 	 	  		placeholder={this.props.label} />
	 	 	
	 	 	);
	 }),
	 getInitialState:(function(){
	 	return {value: (this.props.children || "")};
	 }),
	 //function is called when the component has be updated
	 "componentDidUpdate":(function(preState, preProps){
	 	if(this.props.request==true){
	 		 if(typeof this.props.get=='function'){
	 		 	this.props.get(this.props.name, this.state.value);
	 		 }
	 	}
	 })

});

var __onFocus=(function(event){
	var event   = event || window.event;
	if(event.preventDefault)event.preventDefault();
	
    if(this.props.onFocus){
    	var status  = this.props.onFocus(this);
    	if(status!=true || status !=null){
             event.preventDefault();  
    	}
    }else
      return event.preventDefault();
})

var __blur=(function(event){
	var event  = event || window.event;
	if(event.preventDefault)event.preventDefault();
	var target  = event.target || event.source;
	if(target){
		if(this.props.onFocusOut){
			this.props.onFocusOut(this, target.value);
		}
	}
})





var __keypress=(function(event){
	var event = event || window.event;
	if(event.preventDefault)event.preventDefault();
	var code  = event.charCode || event.keyCode;
	var key   = event.key || event.which || String.fromCharCode(code);
	var target  =event.target || event.source;
	if(this.props.onTextChange){
		event.eventKey= this.props.eventKey;
		var previousText     = event.target.value;
		var currentText      = event.target.value + key;
		var status =this.props.onTextChange(currentText ,previousText);
		 if(!status || status ==true ){
			__appendInput.call(this,target,key )
		   }
		
	}else
	__appendInput.call(this,target, key )

})


LineEdit.prototype.get=(function(){
	 return this.state.value;
})



var __appendInput =(function(target, key){
 target.value  = target.value + key;
 return target.value;
});

var __getType=(function(){

	var type ='text';
	var pText = this.props.type;
    if(typeof pText =='string'){
    	pText = pText.toLowerCase();
    	if(pText=='email' || pText=='password' || pText=='search' || pText=='text'){
    		type=pText;
    	}
    }
  return type;
})


module.exports = LineEdit;
