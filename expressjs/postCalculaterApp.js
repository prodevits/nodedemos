var path=require("path");
var express=require('express');
var app=express();

// static middleware to call empForm.html
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.post("/doReg",function(req,res){
    // get post data
    let data=req.body;
    console.log(data); 
    let s=`Name : ${data.name} <br>  Age :${data.age}`;
    if(data.gender)
       { 
           s=s+` <br>Gender : ${data.gender}`;
        }
       else{
        s=s+` <br>Gender : Not Selected`;
    }

    if(data.edu){
     //   let e=data.edu;
        s=s+` <br>Educations : ${data.edu}`;
    }else{
        s=s+` <br>Educations : Not Selected`;
    }

    if(data.nri){
        //   let e=data.edu;
           s=s+` <br>NRI : ${data.nri}`;
       }else{
        s=s+` <br>NRI : No`;
       }


    res.send(s);
    });
app.listen(3000,function(){
console.log('listening on 3000');
});
