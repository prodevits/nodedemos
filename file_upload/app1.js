let express=require('express');
let app=express();
let multerObj=require("./upload_service");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded





app.get("/",function(req,res){
    const fn=__dirname+"/demo.html";
res.sendFile(fn);
});

app.post("/doUpload",multerObj.single("photo"),function(req,res){
    let fon=req.file.originalname;
    console.log("File Original Name : "+fon);    
    let fn=req.file.filename;
    console.log("File Saved with Name: "+fn);
    console.log("file stored at : "+req.file.path); 
    console.log("User name="+req.body.uname);       
    res.send("Done");
}
);

app.listen(3000,function(){
    console.log("Server Ready on 3000");
}

);