
$(document).ready(function() {

    $(window).load(function() { 
        $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
    })
        var min = 575; // min section height
        var navbarHeight = 75;
        var max = 1080 - navbarHeight; // max section height = full HD vertical resolution - navbar height (75px)
        var resizeSections = (function (){
            if ($( window ).height() < min) $('.fixed-height-section').height(min);
            else if ($( window ).height() > max) $('.fixed-height-section').height(max);
            else $('.fixed-height-section').height($( window ).height() - navbarHeight);
        });

        // avoids to fire the resize event repeatedly by setting a timer after last resize movement
        var waitForFinalEvent = (function () {
            var timers = {};
            return function (callback, ms, uniqueId) {
                if (!uniqueId) {
                    uniqueId = "Don't call this twice without a uniqueId";
                }
                if (timers[uniqueId]) {
                    clearTimeout (timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })();

        $(window).resize(function () {
            waitForFinalEvent(function(){
                resizeSections(); //applies the section height
            }, 100, "UniqueString");
        });

        resizeSections(); //applies the section height

        $('.tile').jTile({effect: 'slide', direction: 'right', height: true, position: 'top' });     // applys jTile to all elements with class 'tile'



	//--------------animation - add to cart
	$(".add-to-cart").click(function(){
		$(".product-image img").animate_from_to(".shopping-cart");
		$(".non-active-cart").hide();
		$(".active-cart").fadeIn();
		$(".product-image img").animate_from_to(".active-cart");
	})
	//--------------animation - add to cart


	  //--------------Click event to scroll to top
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
	  //--------------Click event to scroll to top


	  //--------------home page tiles 
		function setTheHeight() {

		    if( $('.new_products_spotlight ul li .description ').length ) {
		        //Get value of highest element
		        var maxHeight = Math.max.apply(Math, $('.new_products_spotlight ul li .description').map (
		            function() {
		                var totalHeight = 0;
		                
		                $(this).children().each(function() {
		                   totalHeight += $(this).outerHeight(); 
		                });
		                
		                return totalHeight;
		            }
		        ));
		        console.log(maxHeight);
		        $('.new_products_spotlight ul li .description').height(maxHeight);
		    }   
		}

		setTheHeight();

		$(window).resize(function() {
		    setTheHeight();
		});
	//--------------home page tiles


	//--------------smooth scrolling 
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
	//--------------smooth scrolling


	//--------------navbar click-popover
	$(function(){
	  $("#cart-link").popover({
	    html: 'true',
	    		content: function() {
	  			return $('#popoverHiddenContent').html();
			}
	  })
	});
	//--------------navbar click-popover
});