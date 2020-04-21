var path = require('path');
var obj = { dir: 'C:\\abc\\demo', base: 'my_file.js' }
var p = path.format(obj);
console.log(p); 
