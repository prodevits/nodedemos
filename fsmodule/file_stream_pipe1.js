var fs=require('fs');

var rs=fs.createReadStream("files/012.jpg");
var ws=fs.createWriteStream("files/cimg12.jpg");
rs.pipe(ws);

ws.on("finish",function(){
    console.log("File Copy Done");
    });    
rs.on('end',function(err){
    console.log("File Data end");    
})