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
         
})
    await task.save();    
    res.send(task);
});


module.exports = router