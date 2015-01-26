$(document).on( "mobileinit", function() {
    $.mobile.loader.prototype.options.disabled = true;
});
$(document).ready(function() {

	//animation - add to cart
	$(".add-to-cart").click(function(){
		$(".product-image img").animate_from_to(".shopping-cart");
		$(".non-active-cart").hide();
		$(".active-cart").fadeIn();
		$(".product-image img").animate_from_to(".active-cart");
	})

	  //Click event to scroll to top
	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });
	  

	  //smooth scrolling 
		$(function() {
		  $('a.send_to_cart[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

		//swipe carousel
		$(".carousel").swiperight(function() {
	      $(this).carousel('prev');
	    });
	   $(".carousel").swipeleft(function() {
	      $(this).carousel('next');
	   });

	

});

