var express=require('express');var app=express();
app.use("/",function(req,res,next){
console.log('intercepting middleware');
next();
});
app.get("/",function(req,res){
res.send('processing get request for root url');
});
app.get("/emp",function(req,res){
res.send('processing get request for /emp');
});
app.get("/stu",function(req,res){
    res.send('processing get request for /stu');
    });
app.listen(3000,function(){console.log('listening on 3000');
});
