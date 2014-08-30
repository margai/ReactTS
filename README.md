ReactTs
======================

ReactJs to typescript adapter
   - support class
   - ReactJs declarations

Installation
--------------

```sh
git clone https://github.com/margai/ReactTS.git
```

Example: Define component  (use CommonJs)
-----------------------------------

```js
declare  var module:any;
import React=require ("ReactTS");

class Test extends React.BaseComponent {
    public render() {
        return React.DOM.div(null, "hello world");
    }
};


React.registerModule(module);
export=Test;
```


MD editor 
---------------------
http://dillinger.io/
