const  mongoose = require ('mongoose');
const { Schema } = mongoose;

//user Schema
const userSchema = new Schema({
  firstname:  {type:String, required: true}, 
  lastname: String,
  email : {type: String , required : true , unique: true},
  password:  {type:String, required: true},
  age: Number,
  todos : [{type : mongoose.Types.ObjectId , ref : 'todos'}]
},{versionKey : false , timestamps : true });

// create the user model
const User = mongoose.model('users', userSchema);

//export model to use it in an other place
module.exports= User;