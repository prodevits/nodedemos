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

// const removeItem=async ({bill_id,item_id})=>{
//     const bill=await Bill.findById(bill_id); 
//     bill.items.pull({_id:item_id});
//     await bill.save();   
// };

const updateItem=async ({bill_id,item_id,price})=>{
    const bill=await Bill.findById(bill_id); 
    const item=await bill.items.find( e=> e._id==item_id);
    console.log(item);
    item.price=price;
    await bill.save();   
};

updateItem({bill_id:'5ffdce5f524e78050c076d8a',item_id:'5fff21b798140430e4f1cc93',price:100});

