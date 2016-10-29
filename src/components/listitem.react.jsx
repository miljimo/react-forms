var React =require("react");
var ListItem = React.createClass({
	 render:(function(){
        var style=Object.assign({
           contentStyle:{
           	 "position":"relative",
		 	  width:"100%",
		 	 "overflow":"hidden",
		 	 "display":"block",
           }
        }, this.props.style|| {});       
        var className =" "+((typeof this.props.className =='string')? this.props.className: "");
         var text =(this.props.title || "") 
         var children  = this.getChildren();
        if(this.props.dropdown==true){
	 	return (
	 		     <li  onClick={this.onClick.bind(this)} className={"w3-dropdown-hover "+className} style={style}>
				    <a href='#'>{text +" "}<i className="fa fa-caret-down" /></a>				    
				    <div className="w3-dropdown-content w3-card-2" style={style.contentStyle}>
				       { children}
				    </div>
				  </li>
	 		   );
	 }else{
	 	return (<li onClick={this.onClick.bind(this)} className={className} style={style}>{children}</li>);
	 }

	 })
});


ListItem.prototype.getChildren =(function(){
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
		   }else{
		   	Columns.push(control);
		   }
		}).bind(this));

	}else if(typeof controls =='object'){
			props = this.mProps(controls, props,0);
			var child  = React.cloneElement(controls, props);
			Columns.push(child);
			
		
	}else{
		Columns.push(controls);
	}

	return Columns;
})

ListItem.prototype.mProps=(function(control, props, index){
   if(typeof control.onClick !='function'){
    	props.onClick = this.onClick.bind(this);
   }
   if(!control.index)props.index=index;

	return props;
});



ListItem.prototype.onClick=(function(event){
	if(this.props.onSelect){
	   return this.props.onSelect(this, this.props.index);
	}
	return false;

})
module.exports= ListItem ;