var React=require("react")

var CheckBox =React.createClass({
    getInitialState:(function(){
     return {"checked":false, "type":"checkbox"}
    }),
	render:(function(){
		 var type= this.state.type;
		 var defaultClassName ="w3-check";
		 if(typeof this.props.type=='string'){
		 	 if(this.props.type.toLowerCase() =='radio'){
               type  = this.props.type;
               defaultClassName ="w3-radio";
		 	 }
		 }
		var className=defaultClassName+" "+(this.props.className || "");
		var style=Object.assign(this.props.style || {},{});
		return (
				<p>
				  <input className={className} type={type} checked={this.state.checked?"checked":""}  onClick={this.onCheck.bind(this)}/>
				  <label style={this.props.labelStyle || null} className ="w3-validate"> {this.props.children || this.props.label} </label>
				</p>
			 );
	})
});

 //function is called when the component has be updated
CheckBox.prototype.componentDidUpdate=(function(preState, preProps){
	 	if(this.props.request==true){
	 		 if(typeof this.props.get=='function'){
	 		 	this.props.get(this.props.name, this.state.checked);
	 		 }
	 	}
	 });

CheckBox.prototype.onCheck=(function(event){
	var event = event || window.event;
	var target = event.target || event.source;
	if(target){
		 var checked  = target.checked;
		 if(typeof this.props.onCheck=='function')
		 {
		 	var status = this.props.onCheck(this, checked);
		 	if(status==null || status==true){
		 		this.setState({"checked":checked});
		 	}
		 }else{
		 	 this.setState({"checked":checked});
		 }
	}
})


module.exports =CheckBox;