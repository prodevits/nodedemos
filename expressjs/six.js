let express=require("express");

var app=express();


app.get("/emp/:name/:age",(req,res)=>{  
let q=req.params;
console.log(q); 
res.setHeader("Content-Type","text/html");
res.write("Hello "+q.name);
res.write("<br>Age="+q.age);
res.end();
});
app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})