$(document).ready(function() {

  // Place JavaScript code here...

   $('.carousel').carousel({
        interval: 5000 //changes the speed
    });

	//var result = CryptoJS.MD5("l1l10l3l7l9").toString();
	$( "#sortable-main, #sortable-extra" ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();


	$('#validate').click(function() {
	   var string = "";
	   var idsInOrder = $("#sortable-main").sortable("toArray");
	   idsInOrder.forEach(function(id) {
	   		string+=id;
		});
	});

});
