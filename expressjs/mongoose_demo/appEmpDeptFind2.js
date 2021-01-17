var mongoose=require('mongoose');
const Schema=mongoose.Schema;
const locationSchema=new Schema({
    city:String,
    state:String
});

const deptSchema=new Schema({
    name:String,
    locations:[{type:Schema.Types.ObjectId,ref:'location'}]  
}
);

const empSchema=new Schema({
    name:String,
    city:String,
    salary:{type:Number,default:5000},
    department:{type:Schema.Types.ObjectId,ref:'department'}
}
);

var Location=mongoose.model('location',locationSchema);
var Department = mongoose.model('department',deptSchema);
var Employee = mongoose.model('employee',empSchema);


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



Employee.findOne()
    .populate({
        path:'department',
        populate:{
            path:'locations',
            model:'location'
        }
    })    
    .exec( (err,result)=>{
        if(err)
            console.log(err);
            else
            console.log(result);
             console.log(result.department.locations);
});