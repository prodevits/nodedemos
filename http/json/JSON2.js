let data=require('./data.json');
let http=require('http');

http.createServer(function(req,res){    
    res.writeHead(200,{'Content-Type':'application/json '});
    console.log(typeof data);   
    const dataStr=JSON.stringify(data);
    res.end(dataStr);
}).listen(3000,()=>{
    console.log("Server ready on 3000");
    
});