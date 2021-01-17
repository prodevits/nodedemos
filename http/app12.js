// read current request url

var http = require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function (req, res) {  
    var p=url.parse(req.url,true);
    var pt=p.pathname;   
    if(pt=="/hello.html"){
        let rs=fs.createReadStream('hello.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        rs.pipe(res);
    }else if(pt=="/bye.html"){
        let rs=fs.createReadStream('bye.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        rs.pipe(res);
    }else if(pt=="/hi.html"){
        let rs=fs.createReadStream('hello.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        rs.pipe(res);
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Requested Resuoce '"+req.url+"' not Found");      
        res.end();
    }   
  
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});


//try with url
/*
http://localhost:3000/hello.html
http://localhost:3000/hi.html
http://localhost:3000/bye.html
http://localhost:3000/demo.html
*/