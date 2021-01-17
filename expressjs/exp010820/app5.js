let express=require("express");
let jsonData=require("./public/data.json");
var app=express();

app.get("/emps",(req,res)=>{  
  res.json(jsonData);
});

app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})