var React=require("react/lib/React");
var ReactCompositeComponent = require("react/lib/ReactCompositeComponent");
var ReactDescriptor = require("react/lib/ReactDescriptor");
var ReactDescriptorValidator = require("react/lib/ReactDescriptorValidator");

window.React=function(){
	var SpecPolicy = {
  		DEFINE_ONCE: null,
  		DEFINE_MANY: null,
  		OVERRIDE_BASE: null,
  		DEFINE_MANY_MERGED: null
	};

	var ReactCompositeComponentInterface = {
  		mixins: SpecPolicy.DEFINE_MANY,
  		statics: SpecPolicy.DEFINE_MANY,
  		propTypes: SpecPolicy.DEFINE_MANY,
  		contextTypes: SpecPolicy.DEFINE_MANY,
  		childContextTypes: SpecPolicy.DEFINE_MANY,
  		getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
  		getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
  		getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
  		render: SpecPolicy.DEFINE_ONCE,
  		componentWillMount: SpecPolicy.DEFINE_MANY,
  		componentDidMount: SpecPolicy.DEFINE_MANY,
  		componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
  		shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
  		componentWillUpdate: SpecPolicy.DEFINE_MANY,
  		componentDidUpdate: SpecPolicy.DEFINE_MANY,
  		componentWillUnmount: SpecPolicy.DEFINE_MANY,
  		updateComponent: SpecPolicy.OVERRIDE_BASE
	};

	var Constructor=function(){};
	Constructor.prototype=new  ReactCompositeComponent.Base();
	Constructor.prototype.constructor = Constructor;

	 // Reduce time spent doing lookups by setting these on the prototype.
    	for (var methodName in ReactCompositeComponentInterface) {
      		if (!Constructor.prototype[methodName]) {
        		Constructor.prototype[methodName] = null;
      		}
    	}


	//static createFactory
	Constructor.createFactory=function(Constructor){
		var descriptorFactory=ReactDescriptor.createFactory(Constructor);
		if ("production" !== process.env.NODE_ENV) {
      			return ReactDescriptorValidator.createFactory(
        			descriptorFactory,
        			Constructor.propTypes,
        			Constructor.contextTypes
      			);
    		}
		return descriptorFactory; 
	}

	React.BaseReactCompositeComponent=Constructor;
	
	return React;
}();


var TestJs=function(data){
    this.data=data;
}

TestJs.prototype.hello=function(text){
    alert("hello world"+text+this.data);
}
window["TestJs"]=TestJs;