declare  var module:any;
import React=require ("../../lib/ReactTS");

class Test extends React.BaseComponent {

    //инициализация состояния
    getInitialState() {
        console.log("this=",this);
        return {count:0};
    }

    //отрисовка
    public render() {
        return React.DOM.div({ }, "world "+this.state.count);
    }
};

Test.applyMixins(React.addons.LinkedStateMixin);

React.registerModule(module);
export=Test;