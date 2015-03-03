
$(document).ready(function() {
    $(window).load(function() { 
        $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
    })

      if (!Modernizr.svg) {
        $('img[src$=svg]').each(function(index, item) {
            imagePath = $(item).attr('src');
            $(item).attr('src',imagePath.slice(0,-3)+'png');
        });
    }
	$(window).load(function(){
		$( ".new_product_page" ).each(function() {
	        var newHeight = 0, $this = $( this );
	        $.each( $this.children(), function() {
	            newHeight += $( this ).height();
	        });
	        $this.height( newHeight );
	    });
		
	});
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

		$(".carousel").swiperight(function() {  
		  $(this).carousel('prev');  
			});  
	  	$(".carousel").swipeleft(function() {  
	      $(this).carousel('next');  
			});  
	  	
		var height = 0;
		$('.new_products_spotlight ul li').each(function() {
		    height = Math.max( height, $(this).height());
		}).each(function() {
		    $(this).height(height);
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



	$(function(){
	  $("#cart-link").popover({
	    html: 'true',
	    		content: function() {
	  			return $('#popoverHiddenContent').html();
			}
	  })
	});
});