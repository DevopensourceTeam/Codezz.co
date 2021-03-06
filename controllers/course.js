var md5 = require('MD5');
var Exercise = require('../models/Exercise');
var Language = require('../models/Language');
var User = require('../models/User');

/**
 * GET /
 * Game page.
 */
exports.index = function(req, res) {
	Language.find({}, function(error, language){
		res.render('course', {
		  	site: 'Cources',
		    title: 'Cources',
		    slogan: 'Platform for beginners programmers',
			courses: language
		});
	});
};

exports.viewCourse = function(req, res) {
	Language.findOne({'url': req.params.course}, function(error, language){

		if(!language){
			return res.redirect("/course");
		}

		Exercise.find({ '_id': { $in : language['exercise']}}, function(error, exercise){
			User.findById(req.user.id, function(err, user) {
				Exercise.findOne({ '_id': { $in : user['progress']}}).sort({'level':-1}).limit(1).exec(function(error, progress){
					var currentlevel=0;
					if(progress){
						currentlevel = progress['level'];
					}
					
					res.render('course/view', {
						site: 'Course',
		    			slogan: 'Platform for beginners programmers',
						title: language.name,
						courses: language,
						exercises: exercise,
						level: currentlevel
					});
				});
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

			exercise['opciones']=exercise['opciones'].sort(function() {return .5 - Math.random();});

			if(req.params.level>1){
				Exercise.findOne({ '_id': { $in : language['exercise']}, 'level': req.params.level-1}, function(error, lastexercise){
					User.findOne({'_id': req.user.id, 'progress':lastexercise['_id']}, function(err, user) {
						if (user) {
							res.render('course/level', {
								title: "Course",
								course_id: req.params.course,
								course: language,
								level_id: req.params.level,
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
					course_id: req.params.course,
					course: language,
					level_id: req.params.level,
					level: 	exercise
				});
			}
		});
	});
};

exports.validateLevel = function(req, res, next) {	
	Language.findOne({'url': req.body.course}, function(error, language){

		if(!language){
			return res.redirect("/course");
		}

		Exercise.findOne({ '_id': { $in : language['exercise']}, 'level': req.body.level}, function(error, exercise){
				if(md5(exercise['solution'])==md5(req.body.data)){
					User.findById(req.user.id, function(err, user) {

					    if (err) return next(err);

					    if(!(user.progress.indexOf(exercise)>1)){
					    	user.progress.push(exercise);
					    }
					    var stars=0;
					    if(req.body.seconds<=exercise['time']['gold']){
					    	stars=3;
					    }else if(req.body.seconds<=exercise['time']['silver']){
					    	stars=2;
					    }else if(req.body.seconds<=exercise['time']['bronze']){
					    	stars=1;
					    };

					    user.save(function(err) {
					      if (err) return next(err);
      					  res.end(""+stars);
					    });
					});
				}else{
					res.end("-1");
				}
		});
	});
};














