var path = require("path");
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var express = require('express');
var app = express();

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const dbname = 'exp_db';
const db_url = 'mongodb://localhost:27017/';
var db = undefined;
MongoClient.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, con) {
    if (err) {
        console.log(err);
        throw err;
    }
    db = con.db(dbname);
});


app.post("/emps", function (req, res) {
    const r = {};
    const data = req.body;
    db.collection('emp').insertOne(data, function (err, result) {
        if (err) {
            console.log(err);
            r.status = 'fail';
            r.message = err.name;
        } else {
            console.log(result);
            r.status = 'success';
            r.message = 'Data Inserted with id :' + result.insertedId;
        }
        res.json(r);
    });
});

app.get("/emps", (req, res) => {
    const r = {};
    db.collection('emp').find().toArray(function (err, result) {
        if (err) {
            console.log(err);
            r.status = 'fail';
        } else {
            r.status = 'success';
            r.result = result;
        }
        res.json(r);

    });
});

app.get("/emps/:id", (req, res) => {
    const r = {};
    const id = req.params['id'];
    console.log(id);    
    db.collection('emp').findOne({ _id: new ObjectId(id) }, function (err, result) {
        r.status = 'fail';
        console.log(err);        
        console.log(result);                
        if(result){
            r.status = 'success';
            r.result = result;
        }
        res.json(r);
    });
});

app.delete("/emps/:id", (req, res) => {
    const id = req.params['id'];
    db.collection('emp').deleteOne({_id: new ObjectId(id)}, (err, result) => {
        console.log(result);        
        let r = {};
        r.status = 'fail';       
            if (result.deletedCount > 0) {
                r.status = 'success';
                r.message = `Data deleted with id : ${id}`;
            } 
        res.json(r);
    })
});

app.put("/emps/:id", (req, res) => {
    let data = req.body;
    const id = req.params['id'];
    db.collection('emp').updateOne({_id: new ObjectId(id)},{$set:data}, (err, result) => {
        console.log(result);        
        let r = {};
        r.status = 'fail';
        if (result.modifiedCount > 0) {
                r.status = 'success';
                r.message = `Data update for id : ${id}`;
            } else {
                r.status = 'fail';
                r.message = `Data not found for id : ${id}`;
            }
      
        res.json(r);
    });
});

const server = app.listen(3000, function () {
    console.log('listening on 3000');
});
