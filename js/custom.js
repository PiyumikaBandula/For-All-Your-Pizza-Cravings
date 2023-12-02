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

		// Function to load head.html file 
		$('#header1').load('https://piyumikabandula.github.io/Pizza-Website/head.html');

		// Function to load newsletter.html file
		$('#newsletter').load('https://piyumikabandula.github.io/Pizza-Website/newsletter.html');

		// Function to load foot.html file
		$('#footer').load('https://piyumikabandula.github.io/Pizza-Website/foot.html');


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
