const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    Enterfirstname :{ type: String},
    Lastname: { type: String},
    Enteremailid : { type : String },
    Mobilenumber : { type : String },
    Selectrole : { type : String, default: 'User' },
    Password : { type : String},
    Confirmpassword : { type : String}
    
  });

module.exports = mongoose.model('User', UserSchema);