const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const dotenv = require('dotenv');

const path = require('path');

const cron = require('cron');




//configuration dotenv

dotenv.config();

// connecte to database
const connect = require('./database/connect');

//************************/ morgan config*******************
app.use(morgan('dev'));

//config bodyparser
app.use(express.json());

app.get('/', (req, res) => {
  res.json({messasage :'welcome to my REST API'})
});

//todo api
const todoApi = require ('./routes/todosApi');
app.use('/api/v1', todoApi);

//user api
const userApi = require ('./routes/userApi');
app.use('/api/v1', userApi);
//mail api
const mailApi =  require('./routes/mailApi')
app.use('/api/v1', mailApi);

//file api
const fileApi =  require('./routes/fileApi')
app.use('/api/v1', fileApi);

// authentification 

 
const authetification =  require('./routes/authetification.route')
app.use('/api/v1', authetification);

//dossier public pr enregister les fichier 
app.use(express.static(path.join(__dirname, 'public')));





// ************************************************************************


app.listen(port, () => { 
  console.log(`Application listening at http://localhost:${port}`)
})