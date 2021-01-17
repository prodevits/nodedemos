var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "mydb"	// mysql database name
});

con.connect(function (err) {
    if (err)
        throw err;

    console.log("Connected!");
    let id=1091;
    let nm='rita',ct='indore';
    let sal=34567.90;
    con.query("select * from emp", function (err, result) {
        if (err) {
            console.log("Error :");          
        }
        else {
            if(result){
                console.log(result.length);
                for(var i=0;i<result.length;i++){
                    console.log(JSON.stringify(result[i]));
                    
                }
            }
           else{
               console.log("No Data");
               
           }
           
        }
        con.end(function (err) {
            console.log(err);
        }, function () {
            console.log("MySQL Closed");
        });
    });
});


