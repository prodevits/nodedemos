var path = require('path');

//Extract the filename
var filename = path.basename('demo1/demo2/demo_path.js');
console.log(filename);

//Extract the filename, but leave the file extension:
var filename = path.basename('demo1/demo2/demo_path.js','.js');
console.log(filename);

//Extract the filename, file extension not matched:
var filename = path.basename('demo1/demo2/demo_path.js','.css');
console.log(filename);
