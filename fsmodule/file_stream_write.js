var fs = require("fs"); 

var ws=fs.createWriteStream('files/mydata.txt');

ws.on('finish', function() {  
    console.log("Write completed.");  
});  

ws.write('Hello1');
ws.write('Hello2');
ws.write('Hello3');
ws.write('Hello4');

ws.end();
