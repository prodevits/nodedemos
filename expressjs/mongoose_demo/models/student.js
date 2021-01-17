const mongoose = require('mongoose');

const stuSchema = mongoose.Schema({
    name: String,
    age: Number,
    marks: { type: Number, default: 0 }
}
);

const Student = mongoose.model('students', stuSchema);

module.exports = Student;