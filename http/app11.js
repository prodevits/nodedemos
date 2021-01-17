// read current request url

var http = require('http');
var url=require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    var p=url.parse(req.url,true);
    var pt=p.pathname;
    var q=p.query;
    var n1=q.n1;
    var n2=q.n2;
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
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});





// try with urls
//http://localhost:3000/hello
//http://localhost:3000/hello.html
//http://localhost:3000/emp?name=ram&age=23


