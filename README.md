ReactTs
======================

ReactJs to typescript adapter
   - support class
   - ReactJs declarations

version 
-------------
0.1 (Project in work)


Installation
--------------

```sh
git clone https://github.com/margai/ReactTS.git
```

Example: Define component (component.js)
-----------------------------------

```js
declare  var module:any;
import React=require ("./lib/ReactTS");

class Test extends React.BaseComponent {
    render() {
        return React.DOM.div(null, "hello world");
    }
};

React.registerModule(module);
export=Test;
```

Example: Use component 
-----------------------------------

```js
import React=require ("./lib/ReactTS");
import Test=require ("./component");

React.renderComponent(
    React.DOM.div(null,
        new Test(null,null),
        new Test(null,null)
    )
,document.body);
```


MD editor 
---------------------
http://dillinger.io/
