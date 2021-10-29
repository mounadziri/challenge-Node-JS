const express = require('express');
const router = express.Router();
//use the model
const Todo =  require ("../models/todoSchema");

// get all todo : get bch nrécupéri ml serveur
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.json(todos)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});


// ***** get to do by id*******************************
router.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************creat todo post ajouter au serveur******************************************************
router.post('/todos', async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// ***************************update todo put modifier du seveur**************************************
router.put('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************delete todo : effacer du serveur****************************************
router.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        res.json({ messasage: "todo has been deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});



module.exports = router;
