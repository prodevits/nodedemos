//response an html File

var http=require('http');
var fs=require("fs");

http.createServer(function(req,res){
   
    fs.readFile("demo1234.html",function(err,data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("Error Found");
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end();
        }
    });
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});
