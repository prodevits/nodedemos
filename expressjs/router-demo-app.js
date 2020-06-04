var path=require("path");
const express=require('express');
const router1=express.Router();
const router2=express.Router();
const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


router1.use((req, res, next) => {
    console.log("intercepting /admin/...");
    next();
});

router1.get("/", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET --->/admin/");
    res.end("ADMIN");
});

router1.get("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET --->/admin/login");
    res.end("get-admin-login");
});

router1.post("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("POST--->/admin/login");
    console.log("data="+ JSON.stringify(req.body));
    
    res.end("post-admin-login");
});

router1.get("/home", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/admin/home");
    res.end("get-admin-home");
});

app.use("/admin", router1);


//-----------------emp router : router2


router2.use((req, res, next) => {
    console.log("intercepting /emps");
    next();
});

router2.get("/", (req, res) => {
    console.log(req.originalUrl);
    console.log("get --->/emps/");
    res.end("Emps");
});

router2.get("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/emps/login");
    res.end("get-emps-login");
});

router2.post("/login", (req, res) => {
    console.log(req.originalUrl);
    console.log("POST--->/emps/login");
    console.log("data="+ JSON.stringify(req.body));
    
    res.end("post-emps-login");
});

router2.get("/home", (req, res) => {
    console.log(req.originalUrl);
    console.log("GET--->/emps/home");
    res.end("emps home");
});

router2.get("/:id", (req, res) => {
    console.log(req.originalUrl);
    var id=req.params.id;
    console.log("GET--->/emps/"+id);
    res.end("Employee ID="+id);
});

app.use("/emps",router2);


app.listen(3000,function(){
    console.log('listening on 3000');
    });