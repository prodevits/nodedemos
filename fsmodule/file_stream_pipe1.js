var fs=require('fs');

var rs=fs.createReadStream("files/0122222.jpg");
var ws=fs.createWriteStream("files/cimg.jpg");
rs.pipe(ws);
ws.end(function(){
    console.log("Done");
});