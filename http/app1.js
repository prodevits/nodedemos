var http=require('http');

http.createServer(function(req,res){
res.writeHead(201,{'Content-Type':'text/html'});
res.end("Hello");
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});