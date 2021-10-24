const mongoose = require ('mongoose');
const options = {
    useNewUrlPrser: true,
    useUnifiedTopology: true
};

//  .then kén resultat shiha , w .catsh kén fama ay erreur yetsamméw les promise
mongoose.connect('mongodb://localhost:27017/challenges', options)

.then((connect)=>{
console.log("=> connect to the base successfully!");
})

.catch((error) =>{
    console.log('=> connec to databas with errors !');
    console.log(error);
});

