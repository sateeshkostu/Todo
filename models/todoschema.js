const mongoose = require('mongoose');

const TodoSchema =  mongoose.Schema({
    useremail :{ type: String, required: true},
    name: { type: String, required: true },
    Duration : { type : String, required: true },
    Startdate : { type : String, required: true },
    Enddate : { type : String, required: true },
    
  });

module.exports = mongoose.model('Todo', TodoSchema);