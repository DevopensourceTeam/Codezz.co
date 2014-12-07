$(document).ready(function() {

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

		idsInOrder.forEach(function(id) {
			data+=id;
		});

		if(course && level && data){
			
			//socket.emit('validate exercise', uid, course, level, data);

        	$.post("/course/levelvalidate",{course: course, level: level, data: data}, function(result) {
            	if(result)
				{
					alert("Congratulation go to the next level! :)");
				}
          	});
		}
	}

	// Onchange sortable
	/*
	sortableSelector.on("sortchange", function(event, ui){
		console.log("Debug sortchange");
		validateExerciseResult();
	});
	*/

	// Onclick Run code
	var $inputRun = $('#validate');
	$inputRun.click(function () {
		console.log("Debug run click button");
		validateExerciseResult();
  	});

  	function nextLevel()
  	{

  	}


	// Debug
	socket.on('debug', function (data) {
		console.log(data);
	});

	socket.on('greet', function (data) {
		console.log(data);
		socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
	});















});
