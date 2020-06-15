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

    con.query("select * from emp", function (err, result) {
        if (err)
            console.log("Error : " + err);
        else if (result && result.length > 0) {
         //   console.log(result);

            console.log(JSON.stringify(result));

            // for(var ob of result){
            //     console.log(JSON.stringify(ob)); 
            // }
    
            } else {
                console.log("No Result");
            }

            //--- end connection
            con.end((err) => { 
                console.log(err); 
                },()=>{
                console.log("MySQL Connection Closed ");
            });
});

});


