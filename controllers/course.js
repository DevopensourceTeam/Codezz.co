var Exercise = require('../models/Exercise');
var Language = require('../models/Language');
var User = require('../models/User');

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
<<<<<<< HEAD
		Exercise.findOne({ '_id': { $in : data['exercise']}, 'level': req.params.level}, function(error, data){
			exercise = data;
			res.render('course/level', {
				title: "Course",
				course_id: req.params.course,
				course: language,
				level_id: req.params.level,
				level: 	data
=======
		Exercise.find({ '_id': { $in : data['exercise']}, 'level': req.params.level}, function(error, exercise){
			User.findById(req.user.id, function(err, user) {
				Exercise.find({ '_id': { $in : user['progress']}, 'level': req.params.level}, function(error, progress){
				    console.log(progress);
				    if (progress) {
						res.render('course/level', {
						title: "Course",
						course: language,
						level: 	data
						});
					}else{
						console.log("denied");
					}
				});
>>>>>>> validate level
			});
		});
	});
};

exports.validateLevel = function(req, res) {
	var md5 = require('MD5');
	Language.findOne({'url': req.params.course}, function(error, data){
		language = data;
		Exercise.findOne({ '_id': { $in : data['exercise']}, 'level': req.params.level}, function(error, data){
			exercise = data;
				if(md5(exercise['solution'])==req.params.token){
					User.findById(req.user.id, function(err, user) {
					    if (err) return next(err);
					    user.progress.push(exercise);
					    user.save(function(err) {
					      if (err) return next(err);
      					  console.log("Correct!!");
					    });
					});
				}else{
					console.log("wrong!!");
				}
		});
	});
};
