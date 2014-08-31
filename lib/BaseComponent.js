var React=require("react/lib/React");
var ReactCompositeComponent = require("react/lib/ReactCompositeComponent");
var invariant=require("react/lib/invariant");
var utils=require("./ReactCompositeComponent.js");

var BaseComponent=function(props, owner){  this.construct(props, owner); console.log("cnst") };
var p=BaseComponent.prototype=new  ReactCompositeComponent.Base();
BaseComponent.prototype.constructor = BaseComponent;

//apply mixins
BaseComponent.applyMixins = function applyMixins(mixins)  {
    mixins = Array.prototype.slice.call(arguments);
    invariant(
            mixins && mixins.length > 0,
        'You should provide at least one mixin'
    );

    for (var i = 0; i < mixins.length; i++) {
        utils.mixSpecIntoComponent(this, mixins[i]);
    }
};

module.exports=BaseComponent;