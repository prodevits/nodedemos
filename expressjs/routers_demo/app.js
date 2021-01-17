var path=require("path");
const express=require('express');
const adminRoutes=require('./routes/admin-router');
const empRoutes=require('./routes/emp-router');
const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/admin',adminRoutes);
app.use('/emp',empRoutes);

app.get("/",(req,res)=>{
    console.log("App Root");
    res.send("Welcome");
});

app.listen(3000,function(){
    console.log('listening on 3000');
    });
