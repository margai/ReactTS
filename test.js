console.log("start");

var reactTools = require('react-tools');
var transformWithDetails=reactTools.transformWithDetails("/** @jsx React.DOM */<div>123123</div>", {
    harmony:true
});

console.log(transformWithDetails);
