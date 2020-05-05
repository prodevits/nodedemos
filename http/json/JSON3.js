let data=require('./data.json');
let http=require('http');
let url=require('url');

http.createServer(function(req,res){
    let q=url.parse(req.url,true).query;
    if(q.city)
   {
    const ct=q.city;
    var result=data.filter(function(item){
			return item.city==ct;
        });
    if(result && result.length>0){
        res.writeHead(200,{'Content-Type':'application/json'});	
        res.write( JSON.stringify(result));
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h2>No Data Found</h2>");
    }
	
   }else{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h2>Invalid Requiest</h2>");
   }
	res.end(); 
}).listen(3000,()=>{
    console.log("Server ready on 3000");
    
});