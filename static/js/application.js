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
	)

});