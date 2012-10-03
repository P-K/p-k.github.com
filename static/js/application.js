$(document).ready(function () {
	
	$('#name').mouseover(
		function () {
    		$('#name_defn').fadeIn();
    	}
	);

	$('#name').mouseleave(
		function () {
			$('#name_defn').fadeOut();
		}
	);

	$('.img').css({opacity : '0.7'});

	$('.img').mouseover( function() {
		$(this).stop().animate({"opacity":1})
		$(this).children(".img_hover").fadeIn();
	})
	$('.img').mouseleave( function() {
		$(this).stop().animate({"opacity":0.7})
		$(this).children(".img_hover").fadeOut();
	})

	var section = window.location.pathname;

	if (section == '/') { $('#homeLink').attr("style","color: #FFC94D;");}
	if (section == '/about/') { $('#aboutLink').attr("style","color: #FFC94D;");}
	if (section == '/portfolio/') { $('#portfolioLink').attr("style","color: #FFC94D;");}
	if (section == '/reading/') { $('#readingLink').attr("style","color: #FFC94D;");}
	



});