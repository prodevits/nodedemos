let express=require("express");

var app=express();

app.get("/",(req,res)=>{  
  res.send("Hello");
});

app.get("/emp",(req,res)=>{  
  res.send("Hello Employee");
});

app.get("/stu",(req,res)=>{  
  res.send("Hello Student");
});

app.get("/demo",(req,res)=>{  
  const fn=__dirname+"/demo.html";
  res.sendFile(fn);
});


app.get("/reg",(req,res)=>{  
  const fn=__dirname+"/public/empReg.html";
  res.sendFile(fn);
});

app.get("/animal",(req,res)=>{  
  const fn=__dirname+"/public/imgs/animal.jpg";
  res.sendFile(fn);
});
app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})