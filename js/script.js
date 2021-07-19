/*jslint browser: true*/
/*global $*/
$(function () {
	'use strict';
	bsCustomFileInput.init();
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	// ------ nav link

	$('.button-link').on('click', function(){
		$('div.nav-bar .links ul').toggleClass('close');
	});

	// --------- counter 	
	let already_count = false;
	$(window).scroll(function() {
		let hT = $('.counter .container .row').offset().top,
			hH = $('.counter .container .row').outerHeight(),
			wH = $(this).height(),
			wS = $(this).scrollTop();
		if (wS > (hT+hH-wH) && !already_count){
			let animateCountUp = el => {
				let frame = 0;
				let countTo = parseInt( el.getAttribute('data-count'), 10 );
				let counter = setInterval( () => {
					frame++;
					let progress = ( frame / 250 ) * (2 - ( frame / 250 ));
					let currentCount = Math.round( countTo * progress );
					if ( parseInt( el.textContent, 10 ) !== currentCount ) {
						el.textContent = currentCount;
					}
					if ( frame === 250 ) {
						clearInterval( counter );
					}
				}, 20 );
			};
	
			// Run the animation on all elements with a class of ‘countup’
			let all_counter_elements = document.querySelectorAll( '.counter-number' );
			all_counter_elements.forEach( animateCountUp );
			already_count = true;
		}
	 });

	 // ---- current year

	 let current_year = new Date().getFullYear();
	 $('#current_year').text(current_year);

});