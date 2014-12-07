var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
	name: String,
	level: Number,
    description: String,
    solution: String,
    opciones: [{
      answer: String,
      idelement: String 
    }]
});

module.exports = mongoose.model('Exercise', exerciseSchema);
