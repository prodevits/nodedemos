// read current request url

var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring=require('querystring');
http.createServer(function (req, res) {

    var p = url.parse(req.url, true);
    var pt = p.pathname;
    var q = p.query;


    if (pt == "/") {
        let rs = fs.createReadStream('login.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        rs.pipe(res);
    } else if(pt=='/checkLogin'){
        var postData='';
        req.on('data',function(part){
        postData=postData+part;
        });
        req.on('end',function(){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var q=querystring.parse(postData);
            const u=q.uname;
           const p=q.pwd;
           if (u=='aman' && p=='aaaa') {
            res.write("<p>Welcome " + u + "</p>");
        
        } else {
            res.write("<p>Invalid username/password</p>");
        }
            res.end();
        })
       
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Invalid URL');
    }


}).listen(3000, function () {
    console.log("Server is ready on port 3000");
});









