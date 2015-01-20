$(document).ready(function() {
	$(".add-to-cart").click(function(){
		$(".product-image img").animate_from_to(".shopping-cart");
		$(".product-image img").animate_from_to(".shopping-cart-fixed");
	})
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
  
});

