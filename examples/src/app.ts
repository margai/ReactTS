import React=require ("../../lib/ReactTS");
import Test=require ("./component");
//React.DOM.div(null, new Test({name: "John"},[]) );

var t=new Test(null, null);

React.renderComponent(
    React.DOM.div(null,
        new Test({name: "Andrey"},[]),
        new Test({name: "Voin"},[])
    )
,document.body);
