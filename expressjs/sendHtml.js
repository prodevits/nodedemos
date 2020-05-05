let path=require("path");
let express=require("express");
var app=express();

app.get("/",(req,res)=>{
  let filePath=path.join(__dirname,"public","index.html");
  res.sendFile(filePath);
});
app.get("/hello",(req,res)=>{
  let filePath=path.join(__dirname,"public","hello.html");
  res.sendFile(filePath);
});
app.get("/emp",(req,res)=>{
  let filePath=path.join(__dirname,"public","emp.html");
  res.sendFile(filePath);
});
app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})