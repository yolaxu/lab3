'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("name is changed");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	$("a.thumbnail").click(projectClick);
/*
	$('.project').click(listenerFunction);
	$('.project').append('<h1>jQuery</h1>');
	$('.project').hide();*/
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
    var containingProject = $(this).closest(".project");
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    $('.project-description').fadeOut()
}



/*function projectClick(e){
	console.log('Project clikced');
	e.preventDefault();
	$(this).css('background-color','green')
}*/