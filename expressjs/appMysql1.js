let express=require("express");

var app=express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "mydb"	// mysql database name
});


app.get("/",(req,res)=>{  
  
  res.send("Hello");
});

app.get("/emps",(req,res)=>{  
  con.connect(function (err) {
    if (err)
        {
          res.send("Error");
        }else{
          con.query("select * from emp", function (err, result) {
            if (err)
               res.send("Error : " + err);
    
            else if (result && result.length > 0) {
                res.json(result);
            } else {
                res.send("No Result");
            }
            //--- end connection
            con.end((err) => {
                console.log(err);
            }, () => {
                console.log("MySQL Connection Closed ");
            });
        });
        }



});

});

app.listen(3000,()=>{
    console.log("Server is ready on 3000");    
})