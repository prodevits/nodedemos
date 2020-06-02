var express=require('express');
var app=express();

app.use(function(req,res,next){
console.log('intercepting middleware1');
next();
});

app.get("/",function(req,res){
    console.log("processing get request for root url");         
    res.send('processing get request for root url');
});


app.get("/emp",function(req,res){
    console.log('processing get request for /emp');    
    res.send('processing get request for /emp');
});

app.get("/stu",function(req,res){
    console.log('processing get request for /stu');
    
    res.send('processing get request for /stu');
    });


    
    app.use(function(req,res,next){
        console.log('intercepting last middleware');
        res.send("Page Not Found");
        });


app.listen(3000,function(){console.log('listening on 3000');
});
