// read current request url

var http = require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function (req, res) {
  
    var p=url.parse(req.url,true);
    var pt=p.pathname;
    console.log(pt);
    var q=p.query;
    console.log(q);   
    const nm=q.name;
    const ag=q.age;
    const ct=q.city;

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Hello "+nm);      
        res.write("<br> ");      
        
        res.write("Your Age= "+ag);   
        res.write("<br> ");         
        res.write("City= "+ct);     
        
        
        res.end();
    
    
  
}).listen(3000,function(){
    console.log("Server is ready on port 3000");    
});





// try with urls
//http://localhost:3000/hello
//http://localhost:3000/hello.html
//http://localhost:3000/emp?name=ram&age=23


