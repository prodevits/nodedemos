// read url and parse data

var http=require("http");
var url=require('url');

http.createServer(function(req,res){
const u=req.url;
console.log(u);
const p=url.parse(u,true);
const q=p.query;
console.log(q);
res.writeHead(201,{'Content-Type':'text/html'});
    res.write("Hello ");
    res.write("<br>Name="+q.name);
    res.write("<br>Age="+q.age);
res.end();
}).listen(3000,function(){
console.log("Server Ready at port 3000");

});