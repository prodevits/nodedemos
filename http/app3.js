var http=require('http');

http.createServer(function(req,res){
res.writeHead(201,{'Content-Type':'text/html'});
res.write("<h1>Hello</h1>");
res.write("<hr>");
res.write("Welcome in my page");
res.end();
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});