const express = require('express');
const router = express.Router();

//use the model
const User =  require ("../models/userSchema");

// get all users : get bch nrécupéri ml serveur
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});


// ***** get to do by id*******************************
router.get('/users/:id', async (req, res) => {
    try {
        const todo = await User.findById(req.params.id);
        res.json(todo)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************creat todo post ajouter au serveur******************************************************
router.post('/users', async (req, res) => {
    try {
        const todo = await User.create(req.body);
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// ***************************update todo put modifier du seveur**************************************
router.put('/users/:id', async (req, res) => {
    try {
        const todo = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************delete todo : effacer du serveur****************************************
router.delete('/users/:id', async (req, res) => {
    try {
        const todo = await User.findByIdAndRemove(req.params.id);
        res.json({ messasage: "todo has been deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});


module.exports = router;
