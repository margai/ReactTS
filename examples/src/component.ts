declare  var module:any;
import React=require ("../../lib/ReactTS");

class Test extends React.BaseComponent {

    //инициализация состояния
    getInitialState() {
	console.log("this=",this);
        return {count:0};
    }


    //вызывается после монтирования в DOM
    componentDidMount (){
        var count=0;
        setInterval (function(){
            count++;
            this.setState({ count:count });
        }.bind(this),100)
    }

    onClick(e){
        console.log("click",e);
    }

    //отрисовка
    public render() {
        return React.DOM.div({ onClick:this.onClick }, "world "+this.state.count);
    }

};


React.registerModule(module);
export=Test;