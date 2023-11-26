const express = require('express');
const mongoose = require('mongoose');
const app = express();
const tasks = require('./Routes/tasks');


mongoose.connect('mongodb://0.0.0.0:27017/tasks')
.then(()=> console.log('Connection is successful to Database'))
.catch(err => console.error('coudlnt connect to database', err))


app.use(express.json());
app.use('/tasks', tasks);




app.listen(3000, ()=>{
    console.log('port is running on 3000');
});