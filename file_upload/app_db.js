var mysql = require('mysql');
let express=require('express');
let app=express();

let multerObj=require("./upload_service");

app.use(express.static(__dirname));


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var con = mysql.createConnection({
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "node_db"	// mysql database name
});


app.get("/",function(req,res){
    const fn=__dirname+"/index.html";
res.sendFile(fn);
});



app.post("/doUpload",multerObj.single("photo"),function(req,res){
    let fon=req.file.originalname;
    console.log("File Original Name : "+fon);    
    let fn=req.file.filename;
    console.log("File Saved with Name: "+fn);
    console.log("file stored at : "+req.file.path); 
    console.log("User name="+req.body.uname);      
    let data = req.body;
    con.query("insert into reg_data(name,age,photo) values(?,?,?)", [data.uname, data.age, fn], (err, result) => {
     
        if (err) {
          const message = err.sqlMessage;
          res.send(message);;
        } else {
            res.write("<h3><a href='/'>Home</a><hr>");
            res.end('Data Inserted with id :' + result.insertId);
        }  
    });  
    // res.send("Done");
}
);

app.get("/regs",function(req,res){
    con.query("select * from reg_data", (err, result) => {
        var out="<h3><a href='/'>Home</a><hr>";
        if(result && result.length>0){
            console.log(result.length);
            out=out+"<table border='1' width='600'>";
            for(var i=0;i<result.length;i++){
               const data=result[i];
               out=out+`<tr><td>${data.name}</td><td>${data.age}</td><td>${data.photo}</td><td><img src="upload_data/${data.photo}" height="50"></td></tr>`;                
            }
            out=out+"</table>";
        }else{
            out="No Data Found";
        }
        res.end(out);
    });
});

app.listen(3000,function(){
    console.log("Server Ready on 3000");
}
);