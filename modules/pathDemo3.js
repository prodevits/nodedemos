var path = require('path');

//Extract the filename extension with dot
var extname = path.extname('demo1/demo2/demo_path.js');

console.log(extname);

// get extension without dot: use JS substr(fromInddex) function 
var ext=extname.substr(1);
console.log(ext);


