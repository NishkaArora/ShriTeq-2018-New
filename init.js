(function($){
	$(function(){

	    $('.button-collapse').sideNav();

	    $('#prelim-btn').click(function() {
	    	$('#prelim-modal').modal();
	    });

	    $('#schedule-button1').click(function() {
	        $('#day1-schedule').modal();
	    });

	    $('#schedule-button2').click(function() {
	        $('#day2-schedule').modal();
	    });

	    $('#schedule-button3').click(function() {
	    	$('#day3-schedule').modal();
	    });

	    $('#contact-button').click(function() {
	        $('#contact-modal').modal();
	    });

	    $('#signup-button').click(function() {
	        $('#signup-modal').modal();
	    });

	    $('#register-button').click(function() {
	        $('#register-modal').modal();
	    });

	    $('#jquiz-button').click(function() {
	    	$('#junior-quiz-modal').modal();
	    });

	    $('#lca-btn').click(function() {
	    	$('#lca-modal').modal();
	    });

	    $('#scratch-btn').click(function() {
	    	$('#scratch-modal').modal();
	    });

	    $('#msquiz-btn').click(function() {
	    	$('#msquiz-modal').modal();
	    });

	    $('#squiz-btn').click(function() {
	    	$('#squiz-modal').modal();
	    });

	    $('#hack-btn').click(function() {
	    	$('#hack-modal').modal();
	    });

	    $('#crypt-btn').click(function() {
	    	$('#crypt-modal').modal();
	    });

	    $("a").on('click', function(event) {

    		if (this.hash !== "") {
      			event.preventDefault();
			    var hash = this.hash;
			    $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
		        	window.location.hash = hash;
		    	});
    		}
  		});

  		$('.carousel.carousel-slider').carousel({fullWidth: true});

	});
})(jQuery);