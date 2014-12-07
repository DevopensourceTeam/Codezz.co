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
			res.render('course/view', {
				title: req.params.course,
				courses: language,
				exercises: exercise
			});
		});
	});
};

exports.playLevel = function(req, res) {
	Language.findOne({'url': req.params.course}, function(error, data){
		language = data;
		Exercise.findOne({ '_id': { $in : data['exercise']}, 'level': req.params.level}, function(error, data){
			exercise = data;
			res.render('course/level', {
				title: "Course",
				course_id: req.params.course,
				course: language,
				level_id: req.params.level,
				level: 	data
			});
		});
	});
};