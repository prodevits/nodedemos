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
    ecode:103,
    name:'Aman',
    city:'indore',
    salary:13900
});


emp.save((err,result)=>{
    if(err)
        console.log("Error :",err);
    else
        console.log(result);
});



console.log("------------");
Emp.find((err,result)=>{
    if(err)
        console.log("Error :",err);
    else{
        for(var i=0;i<result.length;i++){
            console.log(result[i]);
        }
    }
});


Emp.find({name:'rohan'},{_id:0},(err,result)=>{
    if(err)
        console.log("Error :",err);
    else{
       
            console.log(result);
        }
});


Emp.findOne({name:'rohan'},{_id:0},(err,result)=>{
    if(err)
        console.log("Error :",err);
    else{
       
            console.log(result);
        }
});

// Emp.remove({name:'rohan'},(err,result)=>{
//     if(err)
//         console.log("Error :",err);
//     else{
       
//             console.log(result);
//         }
// });

// Emp.deleteOne({name:'rohan'},(err,result)=>{
//     if(err)
//         console.log("Error :",err);
//     else{
       
//             console.log(result);
//         }
// });

// Emp.deleteMany({name:'rohan'},(err,result)=>{
//     if(err)
//         console.log("Error :",err);
//     else{
       
//             console.log(result);
//         }
// });

// Emp.deleteMany((err,result)=>{
//     if(err)
//         console.log("Error :",err);
//     else{
       
//             console.log(result);
//         }
// });
