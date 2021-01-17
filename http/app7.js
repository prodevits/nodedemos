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
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(req.url);      
        res.end();
    }
    
  
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});





// try with urls
//http://localhost:3000/hello
//http://localhost:3000/hello.html
//http://localhost:3000/emp?name=ram&age=23


