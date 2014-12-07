var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
	name: String,
    description: String,
    solution: String,
    opciones: [{
      answer: String,
      idelement: String 
    }]
});

module.exports = mongoose.model('Exercise', exerciseSchema);