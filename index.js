const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// connecte to database
const connect = require('./database/connect');

//************************/ morgan config*******************
app.use(morgan('dev'));

//*************************body parser config***************
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
 

//use the model
const Todo =  require ('./models/todoSchema')

app.get('/', (req, res) => {
  res.json({messasage :'welcome to my REST API'})
})

// ************************************************************************

// get all todo : get bch nrécupéri ml serveur
app.get('/todos',async(req,res)=>{
  try{
    const todos = await Todo.find({});
    res.json(todos)
  }catch(error)
 {
   console.log(error);
   res.status(500).json({message: 'internal server error'})
 } 

});


// ***** get to do by id*******************************
app.get('/todos/:id',async(req,res)=>{
  try{
    const todo = await Todo.findById(req.params.id);
  res.json(todo)
  }catch(error)
 {
   console.log(error);
   res.status(500).json({message: 'internal server error'})
 } 

});

// *******************creat todo post ajouter au serveur******************************************************
app.post('/todos', async(req,res)=>{
  try{
    const todo = await Todo.create(req.body);
    res.json(todo);
  }catch(error)
 {
   console.log(error);
   res.status(500).json({message: 'internal server error'})
 } 

});

// ***************************update todo put modifier du seveur**************************************
app.put('/todos/:id', async(req,res)=>{
  try{
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.json(todo); 
  }catch(error)
 {
   console.log(error);
   res.status(500).json({message: 'internal server error'})
 } 
 
});

// *******************delete todo : effacer du serveur****************************************
app.delete('/todos/:id', async(req,res)=>{
  try{
    const todo = await Todo.findByIdAndRemove(req.params.id);
    res.json({messasage : "todo has been deleted successfully"})
  
  }catch(error)
 {
   console.log(error);
   res.status(500).json({message: 'internal server error'})
 } 

});


app.listen(port, () => { 
  console.log(`Application listening at http://localhost:${port}`)
})
