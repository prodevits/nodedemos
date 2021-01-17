let express=require("express");

var app=express();

app.get("/",(req,res)=>{  
  res.status(404).end("No Content");
});

app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})