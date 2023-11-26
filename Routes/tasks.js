const express = require('express');
const {Task, validate} = require('../models/tasksModel');
const router = express.Router();




router.get('/', async(req, res)=>{
    let tasks = await Task.find()
    res.send(tasks);
});


router.post('/', async(req, res)=>{
    
    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const task = new Task({
         title : req.body.title,
         description : req.body.description,
         assignedUser : req.body.assignedUser,
         CompeletionStatus : req.body.CompeletionStatus
})
    await task.save();    
    res.send(task);
});




router.put('/:_id', async (req, res)=>{

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    
    const task = await Task.findByIdAndUpdate(req.params._id,
         {title : req.body.title, description : req.body.description},
         {new : true})

    if(!task) return res.status(404).send('The task with this ID was not found')

    res.send(task);
});


router.delete('/:_id', async (req, res)=> {
    
    const task = await Task.findByIdAndDelete(req.params._id)

    if(!task) return res.status(404).send('The task  with the given ID was not found');

    
    res.send(task);
});

 
router.get('/:_id', async (req, res)=> {
    const task = await Task.findById(req.params._id)
    if(!task) return res.status(404).send('The task with the ID was not found');

    res.send(task);

});




module.exports = router