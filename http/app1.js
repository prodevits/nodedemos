var http=require('http');

http.createServer(function(req,res){
res.writeHead(201,{'Content-Type':'text/html'});
res.write("Welcome<br>")
res.end("Hello Guest");
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});