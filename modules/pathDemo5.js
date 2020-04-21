// parse(path) function parse the given path and
//return an object of path type with path attributes

var path = require('path');
var pobj1 = path.parse('demo1/demo2/demo_path.js');
console.log(pobj1);
var pobj2 = path.parse('c:/demo1/demo2/demo_path.js');
console.log(pobj2);
