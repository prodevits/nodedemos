var express=require('express');
var app=express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/emp",function(req,res){
    // get post data
    let data=req.body;
    console.log(data); 
    let s=`Hello ${data.name},  Age=${data.age}`
    res.send(s);
    });
app.listen(3000,function(){
console.log('listening on 3000');
});
