
var path=require('path');
var express=require('express');
var app=express();

app.get("/",function(req,res){
res.send("Hello Express JS");
})
app.get("/emp",function(req,res){
        res.send("Hello Employee");
    })
app.get("/stu",function(req,res){
        res.json("Hello Student");
    })   
app.get("/msg",function(req,res){
    const m={text:"Hello From express js",auther:'aman'};
    res.send(m);
})    

app.get("/hello",function(req,res){
    const p=path.join(__dirname,'public',"hello.html");
   res.sendFile(p);
});

app.listen(3000,function(){
    console.log("Server ready on port : 3000");    
})    