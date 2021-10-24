const  mongoose = require ('mongoose');
const { Schema } = mongoose;

const todosSchema = new Schema({
  title:  {type:String, default :'hello', required: true}, // String is shorthand for {type: String}
  description : String,
},{
    // best practce
    versionKey: false,// for desactiving __v on mongoDB,
    timestamps: true  // time of update and time of creation(creatAT, updaeAT)
});

// create the TODO model té5ou comme parametre ismhom fel base(todos) de donné w ism Schema(todosSchema)
const Todo = mongoose.model('todos', todosSchema);

//export model to use it in an other place
module.exports= Todo;






// Scema l corp mtaa 5edmet mongoose 
// les données elli bch yethattou fel connection w , connection kima locale storage de tableau , fih les objet kol objet yetsamma Schema 
// AY TODO andha title w description
// on a des type proposé ml mongoDB expl String voir documentation mongoose Schematype
// bch naamel models lezm Schema w baad fama mongoose.model()
//ay modification tet3adda bl model , model owa elli y'éxecuti les methode 