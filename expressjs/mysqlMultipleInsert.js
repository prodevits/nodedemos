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
    const data=[
                ['Jon','2011-09-22'],
                ['Rita','1981-01-02']
    ];
    
    con.query(`insert into friends_table(name,dob) values ?`,[data], function (err, result) {
        if (err)
            {
                console.log("Error :");
                console.log(err.code);
                console.log(err.sqlMessage);
            }
        else {
            console.log("row inserted  :"+result.affectedRows);
        }        
        con.end(function(err) { 
            console.log(err); 
            },function(){
                console.log("MySQL Closed");
            });        
});
});


