let express=require("express");

var app=express();

app.get("/emp",(req,res)=>{  
let q=req.body;
console.log(q); 
res.send("Hello");
});
app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
});