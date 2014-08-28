import React=require ("../../lib/ReactTS");

class Test extends React.BaseComponent{
	test2(){alert("test2")}
}

//var f=new Test();
//f.test();
//f.test2();






/*class Test extends ReactComponent {
    constructor(props:any, owner:any) {
           super(props, owner);
    }

    public render() {
        return React.DOM.div(null, "world");
    }
}

var experement=Test.createFactory(Test);
React.renderComponent(experement({name: "John"}), document.body);*/