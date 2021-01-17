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

    con.query("insert into emp values(1001,'rohan','pune',23000)", function (err, result) {
        if (err) {
            console.log("Error :");
            console.log(err.code);
            console.log(err.sqlMessage);
        }
        else {
            console.log("row inserted : " + result.affectedRows);
        }
        con.end(function (err) {
            console.log(err);
        }, function () {
            console.log("MySQL Closed");
        });
    });
});


