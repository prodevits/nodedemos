const express=require('express');
const router=express.Router();

router.use((req, res, next) => {
    console.log("interception admin");
    next();
});

router.get("/", (req, res) => {
    console.log(req.originalUrl);
    console.log("--->/admin/");
    res.end("ADMIN");
});

router.get("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/admin/login");
    res.end("get-login");
});

router.post("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("POST--->/admin/login");
    console.log("data="+ JSON.stringify(req.body));
    
    res.end("post-login");
});

router.get("/home", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/admin/home");
    res.end("home");
});

module.exports=router;

