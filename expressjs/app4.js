let express=require("express");

var app=express();

app.get("/",(req,res)=>{  
    let emps=[{"empid":"1000","name":"sohit","city":"pune","salary":"48000"},
    {"empid":"107","name":"suman sharma","city":"indore","salary":"12000"},
    {"empid":"45654","name":"Prads","city":"Delhi","salary":"80000"}];
  res.json(emps);
});

app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})