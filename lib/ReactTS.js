var React=require('../node_modules/react/lib/ReactWithAddons.js');

React.BaseComponent=require('./BaseComponent.js');
React.registerModule=require('./registerModule.js');
module.exports=React;

console.log("basecomponent",require('./BaseComponent.js').prototype);


