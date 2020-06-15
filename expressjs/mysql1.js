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
});

con.end((err) => { 
    console.log(err); 
    },()=>{
    console.log("MySQL Closed");
});
    