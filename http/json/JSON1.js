let fs=require('fs');
let http=require('http');

http.createServer(function(req,res){
    let jsonData=fs.readFileSync('data.json');
	res.writeHead(200,{'Content-Type':'application/json'});
	res.write(jsonData);
	res.end();
}).listen(3000,()=>{
    console.log("Server ready on 3000");
    
});