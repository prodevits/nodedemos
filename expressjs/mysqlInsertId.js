var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",		//mysql server
user: "root",			// mysql username
password: "",		// mysql password
database: "mydb"	// mysql database name
});

con.connect(function(err) {
    if (err) 
        throw err;

    console.log("Connected!");

    con.query("insert into friends_table(name,dob) values('Rohan','2001-11-22')", function (err, result) {
        if (err)
            {
                console.log("Error :");
                console.log(err.code);
                console.log(err.sqlMessage);
            }
        else {
            const id=result.insertId;
            console.log("row inserted with id :"+id);
        }        
        con.end(function(err) { 
            console.log(err); 
            },function(){
                console.log("MySQL Closed");
            });        
});
});


