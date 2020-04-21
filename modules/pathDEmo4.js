// join(p1,p2...) function joins the specified path segments into one path.

var path = require('path');
//create path with join
var pname = path.join("demo1","demo2","myfile.js");
console.log(pname);
//relative to current directory
var fname = path.join(__dirname,"myfile.js");
console.log(fname);
