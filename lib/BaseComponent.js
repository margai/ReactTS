//var React=require("react/lib/React");
var ReactCompositeComponent = require("react/lib/ReactCompositeComponent");

var BaseComponent=function(props, owner){  this.construct(props, owner); console.log("cnst") };
var p=BaseComponent.prototype=new  ReactCompositeComponent.Base();
BaseComponent.prototype.constructor = BaseComponent;
BaseComponent.applyMixins=function(mixins){

}

module.exports=BaseComponent;