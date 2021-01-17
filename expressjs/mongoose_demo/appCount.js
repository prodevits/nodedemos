var mongoose=require('mongoose');

const empSchema=mongoose.Schema({
    ecode:{type:Number,required:true},
    name:String,
    city:String,
    salary:{type:Number,default:5000}
}
);

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


var Emp = mongoose.model('emps',empSchema);
Emp.countDocuments((err,result)=>{
    console.log(result);
})