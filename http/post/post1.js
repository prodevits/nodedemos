let http=require("http");

http.createServer(function(req,res){
    let postData='';
    req.on("data",function(data){
        postData+=data;
    }).on("end",function(){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(postData);
        console.log(postData);
        
    });
}).listen(3000,function(){
    console.log("Server is Ready on 3000");    
});