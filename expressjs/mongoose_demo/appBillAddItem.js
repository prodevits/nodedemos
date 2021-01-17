var mongoose=require('mongoose');

const billSchema=mongoose.Schema({
    bill_no:{type:Number,required:true},
    customer:{fname:String,lname:String},
    bill_date:Date,
    items:[{name:String,price:Number,qty:Number}]
},{ versionKey: false }
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


mongoose.set('debug', true);

const done=async ()=>{
    const bill=await Bill.findById('5ffdce5f524e78050c076d8a');
   //console.log(bill);
    bill.items.push({name:"Tea",price:549,qty:1.5});
    await bill.save();
    let bill1=await Bill.findById('5ffdce5f524e78050c076d8a');
    console.log(bill1);

    // bill.items.pull({_id:'5ffdbba398aeb723f044ae7b'});
    // await bill.save();
    // let bill1=await Bill.findById('5ffdb9d4dc9ba82718d7c3c8');
    // console.log(bill1);
};

done();

