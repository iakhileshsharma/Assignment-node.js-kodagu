const mongoose = require('mongoose');
const Joi = require('joi');


const taskSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },
})


const Task = mongoose.model('Task' , taskSchema)





function validateData(task){
  const schema = Joi.object({
    
  })
  return schema.validate(task)
}


exports.Task = Task
exports.validate = validateData


