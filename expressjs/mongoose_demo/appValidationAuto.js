var mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    ecode: { type: Number, required: [true, 'ecode is required'] },
    name: {  type:String},
    city: String,
    salary: { type: Number, default: 5000 }
}
);

mongoose.connect("mongodb://localhost:27017/mydb",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (error) {
            console.log("error", error);
        } else {
            console.log("connected")
        }
    }
);


var Emp = mongoose.model('emps', empSchema);

const emp = new Emp({
     ecode: '172',
    name: 'Rohan Sharma',
    city: 'Indore',
    salary: 32000
});

emp.save((errorObj, result) => {
        if(errorObj)        
            console.log("Error :",errorObj.errors.ecode.message);
        else
           {
                console.log('Data Added');
                console.log(result);
            }
    });



