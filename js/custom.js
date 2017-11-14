(function ($) {
    'use strict';

    jQuery(document).ready(function () {
 
	  $('.nav ul li a').click(function(){
		$('li a').removeClass("active");
		$(this).addClass("active");
	});
 

   $(window).on('scroll', function(){

        if( $(window).scrollTop()>200 ){

        $('.header2').addClass('header-bgnone animated fadeInDown');
        } 
        else {

        $('.header2').removeClass('header-bgnone animated fadeInDown');

        }

    }); 
	
	 

  /* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

   $('#main-slide').carousel({
      pause: true,
      interval: 80000,
   });

   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

   
   
   
   
   
  
	   
  });

})(jQuery);