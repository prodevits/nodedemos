var express=require('express');
var app=express();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "mydb"	// mysql database name
});


con.connect(function(err){
    if(err){
        console.log(err);
         throw err;
    }
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.get("/",function(req,res){
     con.query("select * from emp",function(err,result){
                    if(err){
                        console.log(err);
                        res.send("Error")     
                    }else{
                        const data=JSON.stringify(result);
                        res.send(data);
                    }
                });
});

app.get("/emp/:id",function(req,res){
    const id=req.params.id;
    con.query("select * from emp where empid=?",[id],function(err,result){
                   if(err){
                       console.log(err);
                       res.send("Error")     
                   }else{
                    //    const data=JSON.stringify(result);
                    //    res.send(data);
                    if(result.length>0){
                        res.json(result[0]);
                    }else{
                        res.json(null);
                    }
                   }
               });
});


app.delete("/emp/:id",function(req,res){
    const id=req.params.id;
    con.query("delete from emp where empid=?",[id],function(err,result){
                   if(err){
                       console.log(err);
                       res.send("Error")     
                   }else{
                    if(result.affectedRows>0){
                        res.json("data deleted");
                    }else{
                        res.json('data not deleted/ not found');
                    }
                   }
               });
});


app.post("/emp",function(req,res){
       const data=req.body;
       console.log(data);

       const id=data.empid;
       const nm=data.name;
       const ct=data.city;
       const sal=data.salary;
       const a=[id,nm,ct,sal];

       con.query("insert into emp values(?,?,?,?)",a,function(err,result){
           const r={};
           if(err)
           {
               console.log(err);  
               r.status="FAIL";
               r.message=err.sqlMessage;
           }else{
            const c= result.affectedRows;
            r.status="SUCCESS";
            r.message="Data Inserted "+c;
           }
           res.json(r);
       
       });      
});


app.listen(3000,function(){
    console.log("Server ready on port 3000");    
})
