let http=require('http');

let server=http.createServer(function(req,res){
res.writeHead(201,{'Content-Type':'text/html'});
res.end("Hello");
});

server.listen(3000,function(){
    console.log("Server is ready on port 3000");    
});