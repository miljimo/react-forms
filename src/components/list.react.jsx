var React=require("react");
var Item  = require("./listitem.jsx");

var List = React.createClass({


	render:(function(){
		var className ="w3-ul  "+(this.props.className || "");
		var style=Object.assign({

		}, this.props.style || {})
		var ch = this.getChildren();
		
		 return(
		 	<ul className={className} style={style}>
		 	  {ch}
		 	</ul>
		 	)
	})
})

List.prototype.getChildren =(function(){
	var Columns=[];
	var controls  = this.props.children || [];
	var props  = {key:0}
	if(controls instanceof Array){			
		controls.map((function(control, index){
			props.key = index;
		   if(typeof control.type=='function'){
			 	props  = this.mProps(control, props, index);
				var child  = React.cloneElement(control, props);
				Columns.push(child);
				return ;
		   }
		}).bind(this));

	}else if(typeof controls =='object'){
			props = this.mProps(controls, props,0);
			var child  = React.cloneElement(controls, props);
			Columns.push(child);
	}

	return Columns;
})

List.prototype.mProps=(function(control, props, index){
   if(!control.onClick){
    	props.onClick = this.onClick.bind(this);
   }
   if(!control.index)props.index=index;

	return props;
});


List.prototype.onClick=(function(sender, index){
 if(typeof this.props.onSelect=='function'){
 	this.props.onSelect(this, index);
 }

})



List.Item = Item;
module.exports = List;