var mongoose=require('mongoose');

const billSchema=mongoose.Schema({
    bill_no:{type:Number,required:true},
    customer:{fname:String,lname:String},
    bill_date:Date,
    items:[{name:String,price:Number,qty:Number}]
}
);
billSchema.virtual("itemCount").get(function(){
    return this.items.length;
});
billSchema.virtual("amount").get(function(){
    let t=0;
    for(let item of this.items){
        t=t+item.price*item.qty;
    }
    return t;
});

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



Bill.find((err,result)=>{
    if(err)
        console.log("Error :",err);
    else
       { 
          // console.log(result);
            for(bill of result){
                console.log(bill);
                console.log("No of Items=",bill.itemCount);
                console.log("Bill Amount=",bill.amount);
                console.log("------------------------");
            }
        }
});


