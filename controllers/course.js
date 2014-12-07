var Exercise = require('../models/Exercise');
var Language = require('../models/Language');


/**
 * GET /
 * Game page.
 */

exports.index = function(req, res) {
	Language.find({}, function(error, data){
		res.render('course', {
			title: 'Courses', 
			courses: data
		});
	});
};

exports.viewCourse = function(req, res) {
	Language.findOne({'url': req.params.course}, function(error, data){
		language = data;
		Exercise.find({ '_id': { $in : data['exercise']}}, function(error, data){
			exercise = data;
			res.render('course', {
				title: req.params.course,
				course: language,git a
				exercises: exercise
			});
		});
	});
};

exports.playLevel = function(req, res) {
	res.render('course/level', {
		title: "Course",
		course: req.params.course,
		level: req.params.level
	});
};