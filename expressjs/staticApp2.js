var express=require('express');
var app=express();
var path=require("path");

//intercepting each request
app.use((req,res,next)=>{
    console.log("request for url :"+req.url);
    next();
});

app.use(express.static(path.join(__dirname,'public')));

app.listen(3000,function(){console.log('listening on 3000');
});