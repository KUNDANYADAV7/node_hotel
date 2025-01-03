
const mongoose = require('mongoose');
// Define the person schema
const studentSchema = new mongoose.Schema({
  name:{type: String,required: true},
  age:{type:Numbe,required: false},
  mobile:{type: String,required: false},
  email:{type: String,required: true,unique: true  }
})

//create person model
const Student = mongoose.model('Student',studentSchema);
module.exports = Student;
