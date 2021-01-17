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

// Emp.findOneAndDelete({name:'Aman'},(err,result)=>{
//     if(err)
//         console.log("Error :",err);
//     else{
       
//             console.log(result);
//         }
// })

mongoose.set('debug', true);

Emp.findByIdAndDelete('5ffd8c4c5d8a3f10b0fc967d',(err,result)=>{
    if(err)
        console.log("Error :",err);
    else{
       
            console.log(result);
        }
})