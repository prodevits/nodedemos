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

// Emp.deleteOne({name:'Aman'},(err,result)=>{
//     if(err)
//         console.log("Error :",err);
//     else{
       
//             console.log(result);
//         }
// });

// Emp.deleteMany({name:'Aman'},(err,result)=>{
//     if(err)
//         console.log("Error :",err);
//     else{
       
//             console.log(result);
//         }
// });

Emp.deleteMany((err,result)=>{
    if(err)
        console.log("Error :",err);
    else{
       
            console.log(result);
        }
})