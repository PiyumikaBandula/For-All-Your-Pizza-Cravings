	$(document).ready(function() {
			
		"use strict";

		// Function to load head.html file 
		$('#header1').load('https://piyumikabandula.github.io/Pizza-Website/head.html');

		// Function to load newsletter.html file
		$('#newsletter').load('https://piyumikabandula.github.io/Pizza-Website/newsletter.html');

		// Function to load foot.html file
		$('#footer').load('https://piyumikabandula.github.io/Pizza-Website/foot.html');
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
