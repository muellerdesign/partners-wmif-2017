jQuery( function($) {
        'use strict';

	// Insert mobile menu icon before the primary navigation ul
	$( '<div id="menu-mobile" class="mobile-menu-title"><span class="menu-icon">&#8801;</span><span class="menu-title"> CANCER | April 25-27, 2016</span></div>' ).insertBefore( 'ul.menu-primary' );

	// Add .displaynone class to ul.menu-primary to hide ul.menu-primary for small screen sizes
	$( 'ul.menu-primary' ).addClass( 'displaynone' );

	// Toggle nav for mobile menu
	$('#menu-mobile').click (function(){
		$('.menu-primary').slideToggle();
		$(this).toggleClass('active');
	});

});