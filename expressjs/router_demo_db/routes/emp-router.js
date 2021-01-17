const express=require('express');
const router=express.Router();
var ObjectId = require('mongodb').ObjectID;
const db=require('../db/appDb');


router.get("/", (req, res) => {
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


router.post("/", (req, res) =>{
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


router.get("/:id",(req, res) => {
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




router.get("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/emps/login");
    res.end("EMP GET login");
});

router.post("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("POST--->/emps/login");
    console.log("data="+ JSON.stringify(req.body));
    
    res.end("EMP POST login");
});

router.get("/home", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/emps/home");
    res.end("EMP GET home");
});



module.exports=router;

