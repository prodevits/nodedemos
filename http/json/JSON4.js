let data=require('./data.json');
let http=require('http');
let url=require('url');
let fs=require('fs');
http.createServer(function(req,res){     
    if(req.url=="/"){
        const readStream=fs.createReadStream('search.html');
		readStream.pipe(res);
    }
    else if(req.url.startsWith("/doSearch")){
        let p=url.parse(req.url,true);
        let q=p.query;
      
        if(q.city)
        {
         const ct=q.city;
         var result=data.filter(function(item){
                 return item.city==ct;
             });
         if(result && result.length>0){
            res.writeHead(200,{'Content-Type':'text/html'});
            let s="<table border='1'>";
            for(var e of result){
                s=s+`<tr><td>${e.empid}</td><td>${e.name}</td><td>${e.city}</td><td>${e.salary}</td></tr>`;
            }
            s=s+"</table>";
            res.write(s);
        }else{
             res.writeHead(200,{'Content-Type':'text/html'});
             res.write("<h2>No Data Found</h2>");
         }         
        }else{
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write("<h2>Invalid Request</h2>");
        }
         res.end(); 
    }
    else{
        res.end();   
    }
    
}).listen(3000,()=>{
    console.log("Server ready on 3000");
    
});