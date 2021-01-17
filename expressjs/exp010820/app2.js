let express=require("express");

var app=express();

app.get("/",(req,res)=>{  
  res.status(200).send("Hello");
});

app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})