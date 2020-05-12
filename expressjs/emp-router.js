const express=require('express');
const router=express.Router();

router.use((req, res, next) => {
    console.log("interception /emps");
    next();
});

router.get("/", (req, res) => {
    console.log(req.originalUrl);
    console.log("--->/emps/");
    res.end("Emps");
});

router.get("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/emps/login");
    res.end("get-emps-login");
});

router.post("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("POST--->/emps/login");
    console.log("data="+ JSON.stringify(req.body));
    
    res.end("post-emps-login");
});

router.get("/home", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/emps/home");
    res.end("emps home");
});

router.get("/:id", (req, res) => {
    console.log(req.originalUrl);
    var id=req.params.id;
    console.log("GET--->/emps/"+id);
    res.end("Employee ID="+id);
});

module.exports=router;

