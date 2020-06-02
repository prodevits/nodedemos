var express=require('express');
var app=express();

app.use(function(req,res,next){
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

// default handler : when no route match
app.use(function(req,res,next){
    console.log('intercepting last middleware');
    res.send('no match found for '+req.path);
    res.send("Page Not Found");
});  

app.listen(3000,function(){console.log('listening on 3000');
});
 