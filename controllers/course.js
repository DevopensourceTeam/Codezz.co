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
	Language.findOne({'url': req.params.course}, function(error, language){

		if(!language){
			return res.redirect("/course");
		}

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

	Language.findOne({'url': req.params.course}, function(error, language){

		if(!language){
			return res.redirect("/course");
		}

		Exercise.findOne({ '_id': { $in : language['exercise']}, 'level': req.params.level}, function(error, exercise){

			if(!exercise){
				return res.redirect("/course/"+req.params.course);
			}

			if(req.params.level>1){
				Exercise.findOne({ '_id': { $in : language['exercise']}, 'level': req.params.level-1}, function(error, lastexercise){
					User.findOne({'_id': req.user.id, 'progress':lastexercise['_id']}, function(err, user) {
						console.log(user);
						if (user) {
							res.render('course/level', {
							title: "Course",
							course: language,
							level: 	exercise
							});
						}else{
							return res.redirect("/course/"+req.params.course);
						}
					});
				});
			}else{
				res.render('course/level', {
					title: "Course",
					course: language,
					level: 	exercise
				});
			} 
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

					    if(user.progress.indexOf(exercise)>1){
					    	user.progress.push(exercise);
					    }
					    
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
