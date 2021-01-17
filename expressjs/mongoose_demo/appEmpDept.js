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


mongoose.connect("mongodb://localhost:27017/mydb123",
    {useNewUrlParser:true,useUnifiedTopology: true},
    (error)=>{
        if(error){
            console.log("error",error);
        }else{
            console.log("connected")
        }
	}
);


// const loc1=new Location({city:"indore",state:"MP"});
// const loc2=new Location({city:"pune",state:"MH"});

// const d1=new Department({name:"HR",city:"Indore"});
// d1.locations.push(loc1);
// d1.locations.push(loc2);

// const d2=new Department({name:"Sales",city:"Mumbai"});



const emp=new Employee({
    name:'Rohan',
    city:'indore',
    salary:12000,
    department:'6000873f181f652e7ce07fb6'
});

// loc1.save();
// loc2.save();
// d1.save();
// d2.save();
emp.save((err,result)=>{
    if(err)
    console.log(err);
    else
    console.log(result);
});


