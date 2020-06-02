var path=require("path");
var express=require('express');
var app=express();

// static middleware to call empForm.html
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.post("/addEmp",function(req,res){
    // get post data
    let data=req.body;
    console.log(data); 
    let s=`Hello ${data.name},  Age=${data.age}`
    res.send(s);
    });
app.listen(3000,function(){
console.log('listening on 3000');
});
