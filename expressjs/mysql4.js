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
    let id=10913;
    let nm='ravina',ct='indore';
    let sal=34567.90;
    con.query("insert into emp values(?,?,?,?)",[id,nm,ct,sal], function (err, result) {
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


