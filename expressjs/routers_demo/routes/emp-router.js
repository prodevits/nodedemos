const express=require('express');
const router=express.Router();


router.get("/", (req, res) => {
    console.log(req.originalUrl);
    console.log("--->/emps/");
    res.end("Emps");
});

router.post("/signup", (req, res) => {
    console.log(req.originalUrl);
    console.log("POST--->/emps/login");
    console.log("data="+ JSON.stringify(req.body));    
    res.end("EMP POST signup");
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

router.get("/:id", (req, res) => {
    console.log(req.originalUrl);
    var id=req.params.id;
    console.log("GET--->/emps/"+id);
    res.end("EMP GET FOR ID : Employee ID="+id);
});

module.exports=router;

