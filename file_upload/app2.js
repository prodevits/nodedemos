// using file filter to accept only images

let express=require('express');
let app=express();
let upload=require("./upload_service2");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/reg",function(req,res){
    upload(req,res,function(err){
        if(err)
        {
            console.log(err);
            res.send(err);            
        }else{
        let fon=req.file.originalname;
        console.log("File Original Name : "+fon);    
        let fn=req.file.filename;
        console.log("File Saved with Name: "+fn);
        console.log("file stored at : "+req.file.path); 
        console.log("User name="+req.body.uname);       
        res.send("Hello");
        }
    });
    
}
);

app.listen(3000,function(){
    console.log("Server Ready on 3000");
}

);