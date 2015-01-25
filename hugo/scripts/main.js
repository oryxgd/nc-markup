
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

