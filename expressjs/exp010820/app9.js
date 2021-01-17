let jsonData=require("./public/data.json");
var path=require('path');
let express=require("express");
var app=express();

app.get("/",(req,res)=>{
  let filePath=path.join(__dirname,"public","emp_search.html");
  res.sendFile(filePath);
});
app.get("/doSearch",(req,res)=>{
    const ct=req.query.city;
    const data=jsonData.filter((e)=>e.city==ct);
  res.json(data);
});
app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})