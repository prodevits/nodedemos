// read current request url

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

    var p = url.parse(req.url, true);
    var pt = p.pathname;
    var q = p.query;


    if (pt == "/") {
        let rs = fs.createReadStream('calc-radio.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        rs.pipe(res);
    } else if(pt=='/doCalc'){
        var opr=q.opr;
        var n1 = parseFloat(q.n1);
        var n2 = parseFloat(q.n2);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(req.url);
        res.write('<hr>');
        res.write("<p>No1=" + n1 + "</p>");
        res.write("<p>No2=" + n2 + "</p>");
        if (opr == "add") {
            const s = n1 + n2;
            res.write("<p>Addition=" + s + "</p>");
        } else if (opr == "sub") {
            const s = n1 - n2;
            res.write("<p>Subtraction=" + s + "</p>");
        }
        else if (opr == "div") {
            const s = n1 / n2;
            res.write("<p>Division=" + s + "</p>");
        }
        else if (opr == "mult") {
            const s = n1 - n2;
            res.write("<p>Multiplication=" + s + "</p>");
        } else {
            res.write("<p>Invalid Operation</p>");
        }
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Invalid URL');
    }


}).listen(3000, function () {
    console.log("Server is ready on port 3000");
});









