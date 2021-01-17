var mongoose=require('mongoose');

const empSchema=mongoose.Schema({
    ecode:{type:Number,required:true},
    name:String,
    city:String,
    salary:{type:Number,default:5000}
}
);

empSchema.pre('save',function(next){
    console.log("Pre1");
    next();
   // console.log(this);   
})

empSchema.pre('save',async function(next){
    console.log("Pre2");
    const ecode=this.ecode;
    const result=await Emp.findOne({ecode:ecode});
    if(result){
        var err = new Error('Duplicate ecode :'+ecode);
        next(err);
    }else{
        next();
    }
   
})

empSchema.post('save',function(){
    console.log("Post1"); 
})
empSchema.post('save',function(){
    console.log("Post2");
   
})
mongoose.connect("mongodb://localhost:27017/mydb",
    {useNewUrlParser:true,useUnifiedTopology: true},
    (error)=>{
        if(error){
            console.log("error",error.message);
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
    ecode:115,
    name:'Aman',
    city:'Indore',
    salary:12000
});


emp.save((err,result)=>{
    if(err)
        console.log("Error :",err.message);
    else
        console.log(result);
});


