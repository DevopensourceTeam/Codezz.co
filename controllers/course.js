var Exercise = require('../models/Exercise');
var Language = require('../models/Language');


/**
 * GET /
 * Game page.
 */

exports.index = function(req, res) {
	var languages;

	Language.find({}, function(error, data){
		
		languages = data;

		//console.log(languages);

		res.render('course', {
			title: 'Courses', 
			courses: languages
		});
	});
};

exports.viewCourse = function(req, res) {
	res.render('course/view', {
		title: "Course",
		course: req.params.course
	});
};

exports.playLevel = function(req, res) {
	res.render('course/level', {
		title: "Course",
		course: req.params.course,
		level: req.params.level
	});
};