var path = require("path");
var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",		//mysql server
    user: "root",			// mysql username
    password: "",		// mysql password
    database: "mydb"	// mysql database name
});


// static middleware to call empForm.html
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

con.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }
});

app.post("/emps", function (req, res) {
    // get post data
    let data = req.body;
    con.query("insert into emp values(?,?,?,?)", [data.empid, data.name, data.city, data.salary], (err, result) => {
        let r = {};
        if (err) {
            console.log(err);
            r.status = 'fail';
            r.message = err.sqlMessage;
            console.log(r);
        } else {
            console.log(result);
            r.status = 'success';
            r.message = 'Data Inserted with id :' + data.empid;
        }
        res.json(r);
    });
});

app.get("/emps", (req, res) => {
    con.query("select * from emp", (err, result) => {
        res.json(result);
    });
});

app.get("/emps/:id", (req, res) => {
    const id = req.params['id'];
    con.query("select * from emp where empid=?", [id], (err, result) => {
        if (err) {
            res.json(err);
        }
        if(result && result.length>0)
            res.json(result[0]);
        else
            res.json(null);
    });
});

app.delete("/emps/:id", (req, res) => {
    const id = req.params['id'];
    con.query("delete from emp where empid=?", [id], (err, result) => {
        let r = {};
        if (err) {
            console.log(err);
            r.status = 'fail';
            r.message = err.sqlMessage;
            console.log(r);
        } else {
            if (result.affectedRows > 0) {
                r.status = 'success';
                r.message = `Data deleted with id : ${id}`;
            } else {
                r.status = 'fail';
                r.message = `Data not found for id : ${id}`;
            }
        }
        res.json(r);
    })
});

app.put("/emps/:id", (req, res) => {
    let data = req.body;
    const id = req.params['id'];
    con.query("update emp set name=?,city=?,salary=? where empid=?", [data.name, data.city, data.salary, id], (err, result) => {
        let r = {};
        if (err) {
            console.log(err);
            r.status = 'fail';
            r.message = err.sqlMessage;
        } else {
            if (result.affectedRows > 0) {
                r.status = 'success';
                r.message = `Data update for id : ${id}`;
            } else {
                r.status = 'fail';
                r.message = `Data not found for id : ${id}`;
            }
        }
        res.json(r);
    });
});

const server=app.listen(3000, function () {
    console.log('listening on 3000');
});

process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
    console.log('Closing mysql connection.');
    con.end((err) => {
        console.log(err);
    }, () => {
        console.log("MySQL Closed");
    });
});
