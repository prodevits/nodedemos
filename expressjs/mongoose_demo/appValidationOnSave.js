var mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    ecode: { type: Number, required: [true, 'ecode is required'] },
    name: { 
            type:String, 
            validate:{
                validator:(name)=>{
                    return name.length>=3;
                },
                message:'Name should be minimum 3 charcters'
            }
        },
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
    // ecode: '192',
    name: 'AB',
    city: 'Indore',
    salary: 82000
});

emp.save((errorObj, result) => {
        console.log(errorObj);    
            if (errorObj) {
                if(errorObj.errors.ecode)
                    console.log("Error :",errorObj.errors.ecode.message);
                if(errorObj.errors.name)
                    console.log("Error :",errorObj.errors.name.message);
            }           
        else
           {
                console.log('Data Added');
                console.log(result);
            }
    });



