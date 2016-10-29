

var React =require("react");
var Link = React.createClass({

	render:(function(){
		var style =Object.assign(
		{
            overflow:"hidden",
            "margin":"0px",
            "padding":"0px",
		},this.props.style);
		var className= ""+(this.props.className || "");
		return (<a onClick={this.onClick.bind(this)} className ={className} style={style} href={this.props.to || "#"}>{this.props.children || this.props.label}</a>);
	}),

})



Link.prototype.onClick=(function(event){
	var event =event || window.event;	
	if(this.props.onClick){	  
	   var status  = this.props.onClick(this, this.props.index, this.props.to || "#");
	   if(status ==null || status ==true){
	   	 event.preventDefault();
	   }
	}
})


module.exports=Link;
