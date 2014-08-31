import React=require ("../../lib/ReactTS");

import Test=require ("./component");
import ComponentMixins=require ("./mixins");

//React.DOM.div(null, new Test({name: "John"},[]) );

var t=new Test(null, null);

console.log("descr===>", new Test({x:20},null) );

React.renderComponent(
    React.DOM.div(null,
        new Test({name: "Andrey"},[]),
        new Test({name: "Voin"},[]),
        new ComponentMixins(null,null)
    )
,document.body);
