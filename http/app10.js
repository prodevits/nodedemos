// read url and parse data

var http=require("http");
var url=require('url');

http.createServer(function(req,res){
const u=req.url;
const p=url.parse(u,true);
const q=p.query;

    const a=parseInt(q.no1);
const b=parseInt(q.no2);
const s=a+b;
    res.writeHead(201,{'Content-Type':'text/html'});
    res.write("No1= "+a);
    res.write("<br>No2="+b);
    res.write("<br>Addition="+s);

res.end();
}).listen(3000,function(){
console.log("Server Ready at port 3000");
});