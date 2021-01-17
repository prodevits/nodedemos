let http=require("http");
let querystring=require("querystring");

http.createServer(function(req,res){
    let postData='';
    req.on("data",function(data){
        postData+=data;
    }).on("end",function(){
        let dataObj=querystring.parse(postData);
        console.log(dataObj);        
        res.writeHead(200,{"Content-Type":"text/html"});
        let jsonStr=JSON.stringify(dataObj);
        res.end(jsonStr);
        console.log("Name="+dataObj.name);
        
    
    });
}).listen(3000,function(){
    console.log("Server is Ready on 3000");    
});