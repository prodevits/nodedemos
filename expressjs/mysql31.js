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
    let id=1092;
    let nm='rita',ct='indore';
    let sal=34567.90;
    var q=`insert into emp values(${id},'${nm}','${ct}',${sal})`;
    con.query(q, function (err, result) {
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


