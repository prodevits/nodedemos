let express=require("express");
var app=express();

var adminRouter = require('./admin-router');
var empsRouter = require('./emp-router');


app.use("/admin", adminRouter);
app.use("/emps", empsRouter);


app.get("/",function(req,res){
    res.send("Welcome in My App");
});

app.listen(3000,function(){
    console.log("Server is ready on port 3000");    
});
