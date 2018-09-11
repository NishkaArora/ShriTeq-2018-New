document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

$(document).ready(function(){
    $('#top').sticky({topSpacing: 0})
})

$( window ).load(function() {
    $('.fillWidth').get(0).play();
 });