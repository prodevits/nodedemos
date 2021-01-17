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

//create and save new Employee 
// create a Emp model Object
// call save()


const emp=new Emp({
    ecode:107,
    name:'Aman',
    city:'Indore',
    salary:12000
});


emp.save((err,result)=>{
    if(err)
        console.log("Error :",err);
    else
        console.log(result);
});


