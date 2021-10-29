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
 

app.get('/', (req, res) => {
  res.json({messasage :'welcome to my REST API'})
});

//todo api
const todoApi = require ('./routes/todosApi');
app.use('/api/v1', todoApi);

// ************************************************************************


app.listen(port, () => { 
  console.log(`Application listening at http://localhost:${port}`)
})