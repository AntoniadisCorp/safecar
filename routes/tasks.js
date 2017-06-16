var express = require('express')
, passport = require('passport')
, router = express.Router()
, mongo  = require('mongojs')
, db = mongo('mongodb://antoniadis:2a4b6c!8@ds161069.mlab.com:61069/car_brand', ['tasks'])

// As with any middleware it is quintessential to call next()
// if the user is authenticated
, auth = function (req, res, next) {
    console.log('tasks req auth ', req && req.user? req.user : 'req.user undefined')
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) return next();
    // if they aren't redirect them to the home page
    res.json({message: 'You have to sign in ..'})
}




/**
 * https Router Gets
 */
router.get('/tasks', tasks) // Get All Tasks
router.get('/task/:id', singletask) // Get Single task

/**
 * https Router Posts
 */
router.post('/task', auth, savetask) // Save task

/**
 * https Router Delete
 */
router.delete('/task/:id', auth, deletetask) // Delete task

/**
 * https Router Put
 */
router.put('/task/:id', auth, updatetask) // Update task




// ---------- https Functions ToDo ----------
function tasks (req, res, next) {

    db.tasks.find( (err, tasks) => {
        if (err) res.send(err)
        res.json(tasks)
    })
}

function singletask (req, res, next) {

    db.tasks.findOne({_id: mongo.ObjectId(req.params.id) }, (err, task) =>{
        if (err) res.send(err)
        res.json(task)
    })
}

function savetask (req, res, next) {

    var task = req.body

    

    if (!task.title || !(task.isDone + '')) {
        res.status(400)
        res.json({
            "error": "Bad data"
        })
    } else {
        db.tasks.save(task, (err, tasks) => {
            if(err) res.send(err)
            res.json(tasks)
        })
    }
}

function deletetask (req, res, next) {
    
    db.tasks.remove({_id: mongo.ObjectId(req.params.id)}, (err, tasks) => {
        if (err) res.send(err)
        res.json(tasks)
    })
}

function updatetask (req, res, next) {
    
    var task = req.body
    , updTask = {}

    if (task.isDone) updTask.isDone = task.isDone
    if (task.title) updTask.title = task.title
    if (!updTask) {
        res.status(400)
        res.json({"error": "Bad data"})
    } else {
        db.tasks.update({_id: mongo.ObjectId(req.params.id)}, updTask, {}, (err, tasks) => {
            if (err) res.send(err)
            res.json(tasks)
        })
    }
}

module.exports = router