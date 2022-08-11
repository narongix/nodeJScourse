const express = require('express')
const router= new express.Router()
const Task = require('../models/task')


router.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.get('/tasks/:id', (req, res) => {
   
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.status(201).send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findById(req.params.id)

        updates.forEach((update)=> task[update]=req.body[update])

        await task.save()
      
        if (!task) {
            return res.status(404).send('No Task Found')
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }


})

router.delete('/tasks/:id',async(req,res)=>{
    try{

        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send('No record found!')
        }
        res.status(201).send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
})

module.exports = router