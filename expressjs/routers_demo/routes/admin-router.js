const express=require('express');
const router=express.Router();

// http://localhost:3000/admin/

router.get("/", (req, res) => {
    console.log(req.originalUrl);
    console.log("--->/admin/");
    res.end("ADMIN - Root");
});

// http://localhost:3000/admin/login
router.get("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/admin/login");
    res.end("ADMIN GET /Login");
});

router.post("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("POST--->/admin/login");
    console.log("data="+ JSON.stringify(req.body));   
    res.end("ADMIN POST /login");
});

router.get("/home", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/admin/home");
    res.end("ADMIN GET /home");
});

router.get("/emp-list", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/admin/home");
    res.end("ADMIN GET /emp-list");
});


module.exports=router;

