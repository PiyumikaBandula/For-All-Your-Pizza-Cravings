// Pizza items data
var pizzaItems = [
	{ name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.', price: '$9.99' },
	{ name: 'Pepperoni Pizza', description: 'A traditional favorite with tomato sauce, mozzarella cheese, and plenty of pepperoni slices.', price: '$14.99' },
	{ name: 'Vegetarian Pizza', description: 'Loaded with a variety of fresh vegetables like bell peppers, onions, mushrooms, black olives, and tomatoes.', price: '$15.99' },
	{ name: 'BBQ Chicken Pizza', description: 'Tangy barbecue sauce, grilled chicken, red onions, and cilantro on a bed of melted cheese.', price: '$9.99' },
	{ name: 'Hawaiian Pizza', description: 'A tropical delight featuring ham, pineapple, and mozzarella cheese.', price: '$11.99' },
	{ name: 'Meat Lover\'s Pizza', description: 'A carnivore\'s dream, piled high with pepperoni, sausage, bacon, and ground beef.', price: '$7.99' },
	{ name: 'Margarita Supreme', description: 'A deluxe version of the Margherita pizza with additional toppings like olives, mushrooms, and artichokes.', price: '$20.99' },
	{ name: 'Buffalo Chicken Pizza', description: 'Spicy buffalo sauce, grilled chicken, red onions, and a drizzle of ranch dressing.', price: '$23.99' },
	{ name: 'White Pizza', description: 'A unique pizza with a garlic and olive oil base, ricotta cheese, spinach, and mozzarella.', price: '$30.99' },
	{ name: 'Pesto Delight', description: 'Pesto sauce, cherry tomatoes, fresh mozzarella, and pine nuts for a flavorful and aromatic experience.', price: '$12.99' }
];

// Function to display pizza items
function displayPizzaMenu() {
	var menuContainer = $('#menu-container');

	// Loop through pizza items and create HTML elements
	for (var i = 0; i < pizzaItems.length; i++) {
		var pizzaItem = pizzaItems[i];
		var html = '<div class="menu-item" style="color: white"> ';
		html += '<h3>' + pizzaItem.name + '</h3>';
		html += '<p>' + pizzaItem.description + '</p>';
		html += '<p><strong>Price:</strong> ' + pizzaItem.price + '</p>';
		html += '</div>';

		// Append the HTML to the menu container
		menuContainer.append(html);
	}
}

$(document).ready(function() {
	
	"use strict";
	displayPizzaMenu();
	
	/* ========== Sticky on scroll ========== */
	function stickyNav() {

		var scrollTop = $(window).scrollTop(),
			noSticky = $('.no-sticky'),
			viewportSm = $('.viewport-sm'),
			viewportLg = $('.viewport-lg'),
			viewportLgBody = viewportLg.parent('body'),
			viewportLgNosticky = $('.viewport-lg.no-sticky'),
			viewportLgNostickyBody = viewportLgNosticky.parent('body'),
			viewportLgLogo = viewportLg.find('.logo img'),
			viewportLgNostickyLogo = viewportLgNosticky.find('.logo img'),
			headerTransparentLg = $('.viewport-lg.header-transparent'),
			headerTransparentLgNosticky = $('.viewport-lg.header-transparent.no-sticky'),
			headerTransparentLgBody = headerTransparentLg.parent('body'),
			headerOpacityLg = $('.viewport-lg.header-opacity'),
			headerOpacityLgNosticky = $('.viewport-lg.header-opacity.no-sticky'),
			headerOpacityLgBody = headerOpacityLg.parent('body');

		if (scrollTop > navikHeaderHeight) {
			navikHeader.addClass('sticky');
			viewportLgLogo.attr('src', stickyLogoSrc);
			viewportLgNostickyLogo.attr('src', logoSrc);
			headerTransparentLg.removeClass('header-transparent-on');
			headerOpacityLg.removeClass('header-opacity-on');
			headerTransparentLgNosticky.addClass('header-transparent-on');
			headerOpacityLgNosticky.addClass('header-opacity-on');
			viewportLgBody.css("margin-top", navikHeaderHeight);
			viewportLg.css("margin-top", -navikHeaderHeight);
		} else {
			navikHeader.removeClass('sticky');
			viewportLgLogo.attr('src', logoSrc);
			headerTransparentLg.addClass('header-transparent-on');
			headerOpacityLg.addClass('header-opacity-on');
			viewportLgBody.add(viewportLg).css("margin-top", "0");
		}

		noSticky.removeClass('sticky');
		viewportSm.removeClass('sticky');
		
		headerTransparentLg.add(headerTransparentLgBody).add(headerOpacityLg).add(headerOpacityLgBody).add(viewportLgNostickyBody).add(viewportLgNosticky).css("margin-top", "0");

		var logoCenterWidth = $('.logoCenter .logo img').width(),
			menuCenterOneWidth = $('.center-menu-1 .navik-menu').width(),
			menuCenterOneListMenu = $('.center-menu-1 .navik-menu > ul'),
			menuCenterOneListWidth = menuCenterOneWidth - logoCenterWidth;

		if ($(window).width() < 1200) {
			menuCenterOneListMenu.outerWidth( menuCenterOneWidth );
		} else {
			menuCenterOneListMenu.outerWidth( menuCenterOneListWidth / 2 );
		}

		$('.logoCenter').width(logoCenterWidth);
		
	}

	/* ========== Horizontal navigation menu ========== */
	if ($('.navik-header').length) {

		var navikHeader = $('.navik-header'),
			navikHeaderHeight = navikHeader.height(),
			logo = navikHeader.find('.logo'),
			logoImg = logo.find('img'),
			logoSrc = logoImg.attr('src'),
			logoClone = logo.clone(),
			mobileLogoSrc = logo.data('mobile-logo'),
			stickyLogoSrc = logo.data('sticky-logo'),
			burgerMenu = navikHeader.find('.pizza-menu'),
			navikMenuListWrapper = $('.navik-menu > ul'),
			navikMenuListDropdown = $('.navik-menu ul li:has(ul)'),
			headerShadow = $('.navik-header.header-shadow'),
			headerTransparent = $('.navik-header.header-transparent'),
			headerOpacity = $('.navik-header.header-opacity'),
			megaMenuFullwidthContainer = $('.mega-menu-fullwidth .mega-menu-container');

		/* ========== Center menu 1 ========== */
		$('.center-menu-1 .navik-menu > ul:first-child').after('<div class="logoCenter"></div>');
		$('.logoCenter').html(logoClone);

		/* ========== Mega menu fullwidth wrap container ========== */
		megaMenuFullwidthContainer.each(function(){
			$(this).children().wrapAll('<div class="mega-menu-fullwidth-container"></div>');
		});

		/* ========== Window resize ========== */
		$(window).on("resize", function() {

			var megaMenuContainer = $('.mega-menu-fullwidth-container');

			if ($(window).width() < 1200) {

				logoImg.attr('src', mobileLogoSrc);
				navikHeader.removeClass('viewport-lg');
				/*navikHeader.addClass('viewport-sm');*/
				headerTransparent.removeClass('header-transparent-on');
				headerOpacity.removeClass('header-opacity-on');
				megaMenuContainer.removeClass('container');

			} else {

				logoImg.attr('src', logoSrc);
				/*navikHeader.removeClass('viewport-sm');*/
				navikHeader.addClass('viewport-lg');
				headerTransparent.addClass('header-transparent-on');
				headerOpacity.addClass('header-opacity-on');
				megaMenuContainer.addClass('container');

			}

			stickyNav();

		}).resize();

		/* ========== Dropdown Menu Toggle ========== */
		burgerMenu.on("click", function(){
			$(this).toggleClass('menu-open');
			navikMenuListWrapper.slideToggle(300);
		});
		
		navikMenuListDropdown.each(function(){
			$(this).append( '<span class="dropdown-plus"></span>' );
			$(this).addClass('dropdown_menu');
		});
		
		$('.dropdown-plus').on("click", function(){
			$(this).prev('ul').slideToggle(300);
			$(this).toggleClass('dropdown-open');
		});
		
		$('.dropdown_menu a').append('<span></span>');

		/* ========== Added header shadow ========== */
		headerShadow.append('<div class="header-shadow-wrapper"></div>');

		/* ========== Sticky on scroll ========== */
		$(window).on("scroll", function() {
			stickyNav();
		}).scroll();

		/* ========== Menu hover transition ========== */
		var listMenuHover4 = $('.navik-menu.menu-hover-4 > ul > li > a');
		listMenuHover4.append('<div class="hover-transition"></div>');

	}
});