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
const id=1091;
    con.query("delete from emp where empid=?",[id], function (err, result) {
        if (err) {
            console.log("Error :");
            console.log(err.code);

            console.log(err.sqlMessage);
        }
        else {
            console.log("row deleted : " + result.affectedRows);
        }
        con.end(function (err) {
            console.log(err);
        }, function () {
            console.log("MySQL Closed");
        });
    });
});


