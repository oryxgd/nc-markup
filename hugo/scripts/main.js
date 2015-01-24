$(window).load(function() {
        // will first fade out the loading animation
	$("#loader").fadeOut();
        // will fade out the whole DIV that covers the website.
	$("#loader-wrapper").delay(1000).fadeOut("slow");
})
	// $(window).load(function() { // makes sure the whole site is loaded
	// 		$('#loader-wrapper').fadeOut(); // will first fade out the loading animation

	// 	})
$(document).ready(function() {
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
  
  
});

