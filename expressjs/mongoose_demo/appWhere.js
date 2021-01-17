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

Emp.where("salary").gt(25000).exec((err,result)=>{
    if(err)
        console.log("Error :",err);
    else{
       
            console.log(result);
        }
});

Emp.where("salary").gt(25000).where("city").eq('Mumbai').exec((err,result)=>{
    if(err)
        console.log("Error :",err);
    else{
       
            console.log(result);
        }
});


