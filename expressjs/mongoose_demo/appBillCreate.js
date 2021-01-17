var mongoose=require('mongoose');

const billSchema=mongoose.Schema({
    bill_no:{type:Number,required:true},
    customer:{fname:String,lname:String},
    bill_date:Date,
    items:[{name:String,price:Number,qty:Number}]
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


var Bill=mongoose.model("bills",billSchema);

const bill=new Bill({
    bill_no:102,
    bill_date:new Date(),
    customer:{fname:'Raman',lname:'Sharma'},    
});

bill.save((err,result)=>{
    if(err)
        console.log("Error :",err);
    else
        console.log(result);
});


