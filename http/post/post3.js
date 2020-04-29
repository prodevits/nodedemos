let http=require("http");
let querystring=require("querystring");
let fs=require("fs");

http.createServer(function(req,res){
    if(req.method=='POST'){
        let postData='';
        req.on("data",function(data){
            postData+=data;
        }).on("end",function(){
            let dataObj=querystring.parse(postData);
            res.writeHead(200,{"Content-Type":"text/html"});
            let jsonStr=JSON.stringify(dataObj);
            res.end(jsonStr);
        });
    }else{
        const rs=fs.createReadStream("emp.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        rs.pipe(res);          
    }    
}).listen(3000,function(){
    console.log("Server is Ready on 3000");    
});