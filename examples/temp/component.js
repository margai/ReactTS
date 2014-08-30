var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var React = require("../../lib/ReactTS");

var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        _super.apply(this, arguments);
    }
    Test.prototype.getInitialState = function () {
        console.log("this=", this);
        return { count: 0 };
    };

    Test.prototype.componentDidMount = function () {
        var count = 0;
        setInterval(function () {
            count++;
            this.setState({ count: count });
        }.bind(this), 100);
    };

    Test.prototype.onClick = function (e) {
        console.log("click", e);
    };

    Test.prototype.render = function () {
        return React.DOM.div({ onClick: this.onClick }, "world " + this.state.count);
    };
    return Test;
})(React.BaseComponent);
;

React.registerModule(module);
module.exports = Test;
