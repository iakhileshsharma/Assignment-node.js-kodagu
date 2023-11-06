const mongoose = require('mongoose');
const Joi = require('joi');


const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 20
    },

    description : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 50
    },

    assignedUser : {
        type : String,
        required : true
    },

    dueDate : {
        type : Date
    },

    CompeletionStatus : {
        type : String,
        required : true
    }
})


const Task = mongoose.model('Task' , taskSchema)





function validateData(task){
  const schema = Joi.object({
    title : Joi.string().min(5).max(20).required(),
    description : Joi.string().min(5).max(50).required(),
    assignedUser : Joi.string().required(),
    CompeletionStatus : Joi.string().required()
  })
  return schema.validate(task)
}


exports.Task = Task
exports.validate = validateData


