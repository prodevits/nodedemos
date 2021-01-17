let data=require('./data.json');
let http=require('http');
var url=require('url');

http.createServer(function(req,res){ 
    const q=url.parse(req.url,true).query;  
    const ct=q.city;
    const a= data.filter((e)=>e.city==ct);
    if(a.length==0){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("<h2>No Data</h2>");
    }else{
        res.writeHead(200,{'Content-Type':'application/json '});
    const dataStr=JSON.stringify(a);
    res.end(dataStr);
    }
}).listen(3000,()=>{
    console.log("Server ready on 3000");    
});