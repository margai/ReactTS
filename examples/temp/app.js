var React = require("../../lib/ReactTS");

var Test = require("./component");
var ComponentMixins = require("./mixins");

var t = new Test(null, null);

console.log("descr===>", new Test({ x: 20 }, null));

React.renderComponent(React.DOM.div(null, new Test({ name: "Andrey" }, []), new Test({ name: "Voin" }, []), new ComponentMixins(null, null)), document.body);
