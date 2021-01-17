// read current request url

var http = require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function (req, res) {
  
    var p=url.parse(req.url,true);
    var pt=p.pathname;
    var q=p.query;
    var n1=q.n1;
    var n2=q.n2;
   
    if(pt=="/calc.html"){
        let rs=fs.createReadStream('calc.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        rs.pipe(res);
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(req.url);
        res.write('<hr>');   
        res.write("<p>No1="+n1+"</p>");
        res.write("<p>No2="+n2+"</p>");
        if(pt=="/add")
        {
         const s=parseFloat(n1)+parseFloat(n2);
         res.write("<p>Addition="+s+"</p>");
        }else if(pt=="/sub"){
         const s=parseFloat(n1)-parseFloat(n2);
         res.write("<p>Subtraction="+s+"</p>");
        }
        res.end();
    }
    
  
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});







