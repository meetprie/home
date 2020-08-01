 jQuery(document).ready(function(){

	 // lazy Load
	 const observer = lozad(); // lazy loads elements with default selector as '.lozad'
	 observer.observe();
     // lazy Load	

	 // menu toggle	 	
		jQuery('.menu').click(function(){
			jQuery('body').toggleClass('show-menu');
		});
		  jQuery('.close-button').click(function(){
			jQuery('body').removeClass('show-menu');
		});
	    jQuery(window).scroll(function(){
			var sticky = jQuery('#header'),
			  scroll = jQuery(window).scrollTop();

		  if (scroll >= 70) sticky.addClass('fixed');
		  else sticky.removeClass('fixed');
		});

	  // Bottom-top
		jQuery("#myBtn").hide();
		jQuery(function () {
			jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 100) {
					jQuery('#myBtn').fadeIn();
				} else {
					jQuery('#myBtn').fadeOut();
				}
			});

			// scroll body to 0px on click
			jQuery('#myBtn').click(function () {
				jQuery('body,html').animate({
					scrollTop: 0
				}, 1000);
				return false;
			});
		});

	   // Fancybox
		jQuery(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
        });
		$('.owl-carousel').owlCarousel({
			    loop:false,
			    margin:0,
			    nav:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        1000:{
			            items:1
			        }
			    }
			});
			$('.lenses-slider').owlCarousel({
			    loop:false,
			    margin:0,
			    nav:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        1000:{
			            items:1
			        }
			    }
			})
			$(window).scroll(function() {
				var header = $('.header');
				var scroll = $(window).scrollTop();

				if (scroll > 300) {
					header.addClass('fixed');
				}
				else{
					header.removeClass('fixed');
				}
			});
			$("#toTop").click(function() {
			    $("html, body").animate({scrollTop: 0}, 1000);
			 });
			$("#toggler").click(function() {
				$('.navbar').toggleClass('navshow');
			});
			$("#toggler").click(function() {
				$("body").toggleClass('side-menu-show');
			});
			$('.owl-prev').text("");
			$('.owl-next').text("");

			var autowdth = $('.horizontal-slide-nav .owl-dots').width();
			$('.owl-nav').css({
				"width" : autowdth
			});
			$('.full-video').click(function() {
				$('.full-video-content').toggleClass('hideiframe');
			});
});

