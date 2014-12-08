$(document).ready(function() {
  	var start = new Date();

  // General jquery
   $('.carousel').carousel({
        interval: 5000 //changes the speed
    });

   	// Sortable

	var sortableSelector = $( "#sortable-main, #sortable-extra" );

	var sortableMain = sortableSelector.sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();

	// Socket.io
	var socket = io();
	var uidData	= $('#uid');
	var courseData = $('#courseid');
	var levelData = $('#levelid');

	// Validate user exercise
	function validateExerciseResult () {
		var data = "";
		var course = courseData.val().trim();
		var level = levelData.val().trim();
		var idsInOrder = $("#sortable-main").sortable("toArray");
		var consoletag="Codezz:$"
		var end = new Date();
        var seconds = Math.floor((end - start) / 1000);
		idsInOrder.forEach(function(id) {
			data+=id;
		});

		if(course && level && data){
			
			//socket.emit('validate exercise', uid, course, level, data);

        	$.post("/course/levelvalidate",{course: course, level: level,seconds: seconds, data: data}, function(result) {
					switch(result){
						case "-1":
							$('.console-log').append('<p>'+consoletag+' Wrong! Try Again!</p>');
					        break;
   						case "0":
							$('.console-log').append('<p>'+consoletag+' Correct!</p>');
							nextLevel(0,"Correct!");
					        break;
   						case "1":
							$('.console-log').append('<p>'+consoletag+' Good!</p>');
							nextLevel(1,"Good!");
					        break; 
   						case "2":
							$('.console-log').append('<p>'+consoletag+' Very Good!</p>')
							nextLevel(2,"Very Good!");
					        break;
    					case "3":
							$('.console-log').append('<p>'+consoletag+' Perfect!</p>')
							nextLevel(3,"Perfect!");
					        break;   
					}

          	});

      	  	function nextLevel(stars,text){
      	  		console.log(stars);
      	  		sweetAlert({
				  title: text,
				  type: "success",
				  confirmButtonColor: "#DD6B55",
				  confirmButtonText: "Continue",
				  closeOnConfirm: true
				}, function(){
					window.location.href ="/course/"+course+'/level/'+( Number(level)+1 );
				});
  			}
		}
	}

	// Onclick Run code
	var $inputRun = $('#validate');
	$inputRun.click(function () {
		console.log("Debug run click button");
		validateExerciseResult();
  	});

	// Debug
	socket.on('debug', function (data) {
		console.log(data);
	});

	socket.on('greet', function (data) {
		console.log(data);
		socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
	});















});
