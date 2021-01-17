var mongoose=require('mongoose');
const { deleteOne } = require('../models/student');

mongoose.connect("mongodb://localhost:27017/mydb",
    {useNewUrlParser:true,useUnifiedTopology: true},
    (error)=>{
        if(error){
            console.log("error",error);
        }else{
            console.log("connected")
        }
	}
);

beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        done();
    });
});