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
const id=1092;
const nm="suman";
const ct='akola';
    con.query("update emp set name=?,city=? where empid=?",[nm,ct,id], function (err, result) {
        if (err) {
            console.log("Error :");
            console.log(err.code);

            console.log(err.sqlMessage);
        }
        else {
            console.log("row updated : " + result.affectedRows);
        }
        con.end(function (err) {
            console.log(err);
        }, function () {
            console.log("MySQL Closed");
        });
    });
});


