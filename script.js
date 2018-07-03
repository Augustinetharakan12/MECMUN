$(document).ready(function(){

	$("#main-page").css("height",screen.availHeight-(screen.availHeight)/4);
	

	var $animation_elements = $('.animation-element');
	var $window = $(window);
	var lastScrollTop = 0;

	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if(st == 0){
	   	$("nav").addClass('scroll-up');
	   	$("nav").removeClass('scroll-down');
	   }
	   else if (st > lastScrollTop ){
	    $("nav").removeClass('scroll-up');
	    $("nav").addClass('scroll-down');
	   } else {
	   	$("nav").addClass('scroll-up');
	   	$("nav").removeClass('scroll-down');
	   }
	   lastScrollTop = st;
	   console.log("last scroll top= "+lastScrollTop);
	});

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


	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	// On-page links
	if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		){
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
		    // Only prevent default if animation is actually gonna happen
		    event.preventDefault();
		    $('html, body').animate({
		      scrollTop: target.offset().top
		    }, 1000, function() {
		      // Callback after animation
		      // Must change focus!
		      var $target = $(target);
		      // $target.focus();
		      if ($target.is(":focus")) { // Checking if the target was focused
		        return false;
		      } else {
		        // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		        // $target.focus(); // Set focus again
		      };
		    });
		  }
		}
	});


	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
	console.log($window.height());
	console.log(screen.height);
});


