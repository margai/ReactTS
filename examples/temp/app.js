var React = require("../../lib/ReactTS");
var Test = require("./component");

var t = new Test(null, null);

React.renderComponent(React.DOM.div(null, new Test({ name: "Andrey" }, []), new Test({ name: "Voin" }, [])), document.body);
