var express=require('express');
var app=express();
var path=require('path');

var express=require('express');
var app=express();
var path=require('path');


app.use(function(req,res,next){
    console.log("In middleware :"+req.path); 
    next();
});

app.use(express.static(path.join(__dirname,'public')));



app.get("/",function(req,res){
    console.log("processing get request for root url");         
    res.send('processing get request for root url');
});

app.use("/emp",function(req,res,next){
    console.log("In /emp middleware");    
    next();
});

app.get("/emp",function(req,res){
    console.log('processing get request for /emp');    
    res.send('processing get request for /emp');
});

app.get("/emp/:id",function(req,res){
    const id=req.params.id;
    console.log('processing get request for /emp/'+id);    
    res.send('processing get request for /emp/'+id);
});
app.get("/stu",function(req,res){
    console.log('processing get request for /stu');
    
    res.send('processing get request for /stu');
});


app.use(function(req,res,next){
    console.log("Last middleware when no route match");    
    res.send("Page Not Found");
});

app.listen(3000,function(){
    console.log('listening on 3000');
});

