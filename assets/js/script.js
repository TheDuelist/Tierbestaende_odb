
$(document).ready(function() {
 	//für navigation
 	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 569) {
	        $(".navbar").addClass("navbar-fixed-top dark-bar");
	    } else {
	        $(".navbar").removeClass("navbar-fixed-top dark-bar");
	    }
	});

 	// height
 	var h = $('.expert').height();
 	$('.expert .col-sm-6 div').height(function (index, height) {
	    return (h);
	});

});