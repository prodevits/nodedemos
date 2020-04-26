var http=require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello Guest</h1>");
    res.write("<br>Hello1");
    res.write("<br>Hello2");
    res.end();
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});


//MIME

//text/html
//image/jpg
//image/gif


// HTTP response Codes


//port no