//response an html File

var http=require('http');
var fs=require("fs");

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("demo.html",function(err,data){
        if(err){
            res.end("Error Found");
        }else{
            res.end(data);
        }
    });
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});
