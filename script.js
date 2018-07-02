$(document).ready(function(){

	$("#main-page").css("height",screen.availHeight-(screen.availHeight)/4);
	$(".count-particles").css("opacity",0);
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	console.log($animation_elements);

	function check_if_in_view() {
	  var window_height = screen.availHeight;
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
	  	console.log($window.height());
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	    	console.log(element_bottom_position+' '+element_top_position + ' '+window_bottom_position+' '+window_top_position);
	    	console.log($element[0])
	    	$element.addClass('in-view');
	    }//else {
	    //	$element.removeClass('in-view');
	    //}
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
	console.log($window.height());
	console.log(screen.height);
});


