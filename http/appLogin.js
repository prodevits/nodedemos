// read current request url

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

    var p = url.parse(req.url, true);
    var pt = p.pathname;
    var q = p.query;


    if (pt == "/") {
        let rs = fs.createReadStream('login.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        rs.pipe(res);
    } else if(pt=='/checkLogin'){
        var u=q.uname;
        var p=q.pwd;      
       
        res.writeHead(200, { 'Content-Type': 'text/html' });
       
        res.write('<hr>');      
        if (u=='aman' && p=='aaaa') {
            res.write("<p>Welcome " + u + "</p>");
        
        } else {
            res.write("<p>Invalid username/password</p>");
        }
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Invalid URL');
    }


}).listen(3000, function () {
    console.log("Server is ready on port 3000");
});









