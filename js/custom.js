// JavaScript Document


	$(window).on('load', function() {
	
		"use strict";

						
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		$("#loader").delay(100).fadeOut();
		$("#loader-wrapper").delay(100).fadeOut("fast");
				
	});


	$(document).ready(function() {
			
		"use strict";


		/*----------------------------------------------------*/
		/*	Hero Slider
		/*----------------------------------------------------*/

		
		// Function to load head.html file 
		$('#header-3').load('head.html');

		// Function to load newsletter.html file
		$('#newsletter').load('newsletter.html');

		// Function to load foot.html file
		$('#footer').load('foot.html');


		$('.slider').slider({
			full_width: false,
			interval:6000,
			transition:1000,
			draggable: false,
			indicators: true,
		});

		$('.slide-next').click(function() {
			$('.slider').slider('next');
		});

		$('.slide-prev').click(function() {
			$('.slider').slider('prev');
		});


		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		
		$('.header a[href^="#"], .wsmenu a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				$target = jQuery(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});


		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/
		
		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '99999'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '99999' });
			}

			// Scroll function
			$(window).on('scroll', function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).on('click', function(event){
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		$.scrollUp();


		/*----------------------------------------------------*/
		/*	Tabs #1
		/*----------------------------------------------------*/

		$('ul.tabs-1 li').on('click', function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs-1 li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});


		/*----------------------------------------------------*/
		/*	Tabs #2
		/*----------------------------------------------------*/

		$('ul.tabs-2 li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs-2 li').removeClass('displayed');
			$('.tab-content').removeClass('displayed');

			$(this).addClass('displayed');
			$("#"+tab_id).addClass('displayed');
		});


		/*----------------------------------------------------*/
		/*	Reviews Rotator Flexslider
		/*----------------------------------------------------*/
		
		$('#reviews-1 .flexslider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,  
			slideshowSpeed: 5000,   
			animationSpeed: 2000,  
			start: function(slider){
				$('body').removeClass('loading');
			}
		});	

		
		/*----------------------------------------------------*/
		/*	Single Image Lightbox
		/*----------------------------------------------------*/
				
		$('.image-link').magnificPopup({
		  type: 'image'
		});	


		/*----------------------------------------------------*/
		/*	Video Link #1 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup1').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/SZEflIVnhH8'				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Video Link #2 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup2').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/7e90gBu4pas'				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Video Link #3 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup3').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/0gv7OC9L2s8'					
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.promo-holder');
			owl.owlCarousel({
				items: 3,
				loop:true,
				autoplay:true,
				navBy: 1,
				nav: true,
				dots: false,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1000:{
						items:3
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.promo-8-carousel');
			owl.owlCarousel({
				items: 3,
				loop:true,
				autoplay:true,
				navBy: 1,
				nav: false,
				dots: false,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					991:{
						items:2
					},
					1000:{
						items:2
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Gallery Photo Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.images-carousel');
			owl.owlCarousel({
				items: 4,
				loop:true,
				autoplay:true,
				navBy: 1,
				autoplayTimeout: 4500,
				autoplayHoverPause: false,
				smartSpeed: 3000,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:1
					},
					767:{
						items:2
					},
					768:{
						items:2
					},
					991:{
						items:3
					},				
					1000:{
						items:4
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.reviews-wrapper');
			owl.owlCarousel({
				items: 3,
				loop:true,
				autoplay:true,
				navBy: 1,
				autoplayTimeout: 4500,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1000:{
						items:3
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Brands Logo Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.brands-carousel');
			owl.owlCarousel({
				items: 5,
				loop:true,
				autoplay:true,
				navBy: 1,
				nav:false,
				autoplayTimeout: 4000,
				autoplayHoverPause: false,
				smartSpeed: 2000,
				responsive:{
					0:{
						items:2
					},
					550:{
						items:3
					},
					767:{
						items:3
					},
					768:{
						items:4
					},
					991:{
						items:5
					},				
					1000:{
						items:6
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Booking Form Validation
		/*----------------------------------------------------*/

		$(".booking-form").validate({
			rules: {
				select: "required",
				name: "required",
				email: {
					required: true,
					email: true
				},
				phone:{
					required: true,
					digits: true,
				}
			},
			messages: {
				select: "This field is required",
				name: "Please enter your name",
				email: "We need your email address to contact you",
				phone: "Please enter a valid number",
			}
		});


		/*----------------------------------------------------*/
		/*	Contact Form Validation
		/*----------------------------------------------------*/
		
		$(".contact-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},       		
					message:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							name:{
								required: "Please enter no less than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							message:{
								required: "Please enter no less than (2) characters"
							}, 
						}
		});


		/*----------------------------------------------------*/
		/*	Comment Form Validation
		/*----------------------------------------------------*/
		
		$(".comment-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},       		
					message:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							name:{
								required: "Please enter no less than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							message:{
								required: "Please enter no less than (2) characters"
							}, 
						}
		});	


		/*----------------------------------------------------*/
		/*	Newsletter Subscribe Form
		/*----------------------------------------------------*/
	
		$('.newsletter-form').ajaxChimp({
        language: 'cm',
        url: 'https://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		});

		$.ajaxChimp.translations.cm = {
			'submit': 'Submitting...',
			0: 'We have sent you a confirmation email',
			1: 'Please enter your email address',
			2: 'An email address must contain a single @',
			3: 'The domain portion of the email address is invalid (the portion after the @: )',
			4: 'The username portion of the email address is invalid (the portion before the @: )',
			5: 'This email address looks fake or invalid. Please enter a real email address'
		};	


	});

	function setx1() {
		$(".h2-xl").text('Sign Up');
	}

// 	function login() {
// 		// var username = $('#login-email').val();
// 		// var password = $('#login-password').val();

// 		// isValid = true;
// 		// validate_username('login', username);
// 		// validate_password('login', password);

// 		// if (isValid == true) {
// 			window.alert('Login Successful');
// 		// }

// 		// $.ajax({
// 		// 	type: 'POST',
// 		// 	url: '/https://web.postman.co/workspace/My-Workspace~bb6c90aa-15d0-480e-85d6-c1fe1a4619fa/request/create?requestId=f135fc5c-440f-42d7-a005-ef5c1df584cf',
// 		// 	data: { username: username, password: password },
// 		// 	success: function(result) {
// 		// 		window.alert('Login Successful');
// 		// 	}
// 		// });
// 	}

// 	function signup() {
// 		// var name = $('#signup-name').val();
// 		// var username = $('#signup-email').val();
// 		// var password = $('#signup-password').val();

// 		// isValid = true;
// 		// validate_name(name);
// 		// validate_username('signup', username);
// 		// validate_password('signup', password);

// 		// if (isValid == true) {
// 			window.alert('Signup Successful');
// 		// }

// 		// $.ajax({
// 		// 	type: 'POST',
// 		// 	url: '/https://webhook.site/66711bcf-be8c-4336-a207-3856de996dab',
// 		// 	data: { username: username, password: password },
// 		// 	success: function(result) {
// 		// 		window.alert('Signup Successful');
// 		// 	}
// 		// });
// 	}

// 	// Validate username
// function validate_username(l,un) {
//     if (un == "") {
// 		if (l=="login"){
// 			$("#login-email").next().text("Required");
// 			isValid = false;
// 		}else{
// 			$("#signup-email").next().text("Required");
// 			isValid = false;
// 		}
//     }else {
// 		if (l=="login"){
// 			$("#login-email").next().text("*");
// 		}else{
// 			$("#signup-email").next().text("*");
// 		}
//     }
// }

// // Validate password
// function validate_password(l, pw) {
//     if (pw == "") {
// 		if (l=="login"){
// 			$("#login-password").next().text("Required");
// 			isValid = false;
// 		}else{
// 			$("#signup-password").next().text("Required");
// 			isValid = false;
// 		}
//     }else {
// 		if (l=="login"){
// 			$("#login-password").next().text("*");
// 		}else{
// 			$("#signup-password").next().text("*");
// 		}
//     }
// }

// // Validate name
// function validate_name(nm) {
//     if (nm == "") {
//         $("#signup-name").next().text("Required");
//         isValid = false;
//     }else {
//         $("#signup-name").next().text("*");
//     }
// }
