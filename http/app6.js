//response an image File

var http=require('http');
var fs=require("fs");

http.createServer(function(req,res){
    let rs=fs.createReadStream('0122222.jpg');
    res.writeHead(200, {
        "Content-Disposition": "attachment;filename=012.jpg",
        'Content-Type': 'image/jpg'
      });
    rs.pipe(res);
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});
