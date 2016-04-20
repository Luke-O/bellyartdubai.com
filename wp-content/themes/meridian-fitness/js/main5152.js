"use strict";

/**
 * = Table Of Contents =
 *
 * meridian_fitness_equal_contact ( Equalize contact page columns )
 * meridian_fitness_buttons ( Generate buttons HTML for hover effect )
 * meridian_fitness_navigation ( Generate navigation HTML for hover effect )
 * meridian_fitness_social ( Generate social icons HTML for hover effect )
 * meridian_fitness_animate ( Animate classes )
 * meridian_fitness_tabs ( Generate tabs )
 * meridian_themes_social_share ( Social sharing )
 * meridian_fitness_slider_offset ( Slide offset )
 * meridian_fitness_slider ( Slider )
 * meridian_fitness_slider_nav ( Slider nav )
 * meridian_fitness_slider_center ( Slider center )
 * meridian_fitness_carousel ( Carousel )
 * meridian_fitness_retina_img_replace ( Retina images replace )
 * meridian_fitness_equal_classes_height ( Equalize classes height )
 * meridian_fitness_slider_scroll ( Slider Scroll )
 * meridian_fitness_center_classes_schedule_details ( Center schedule details )
 * meridian_fitness_header_footer_z_switch ( Switch up z index on header and footer ( reveal functionality ) )
 *
 * # Ready
 * # Load
 * # Scroll
 * # Resize
*/

/**
 * Equalize contact page columns
 */
function meridian_fitness_equal_contact() {

	// If on the contact page
	if ( jQuery('body').hasClass('page-template-template-contact-php') ) {

		var contentHeight = jQuery('#content').outerHeight(),
		infoHeight = jQuery('#contact-info').outerHeight();

		// If content taller than info
		if ( contentHeight > infoHeight ) {

			jQuery('#contact-info').height( jQuery('#content').height() );

		}

	}

}

/**
 * Generate buttons HTML for hover effect
 */
function meridian_fitness_buttons() {

	var button,
	buttonText;

	// Go through each button
	jQuery('.button').each(function(){

		button = jQuery(this);

		// Initiate if not already initiated
		if ( ! button.find('span').length ) {
			buttonText = button.text();
			button.html( '<span class="button-span-1">' + buttonText + '</span><span class="button-span-2">' + buttonText + '</span>' );
		}

	});

}

/**
 * Generate navigation HTML for hover effect
 */
function meridian_fitness_navigation() {

	jQuery.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

	if ( jQuery.browser.chrome || jQuery.browser.firefox ) {

		var button,
		buttonText;

		// Go through each button
		jQuery('#navigation a').each(function(){

			button = jQuery(this);

			// Initiate if not already initiated
			if ( ! button.find('span').length ) {
				buttonText = button.text();
				button.html( '<span class="nav-span-1">' + buttonText + '</span><span class="nav-span-2">' + buttonText + '</span>' );
			}

		});

	}

}

/**
 * Generate social icons HTML for hover effect
 */
function meridian_fitness_social() {

	jQuery.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

	if ( jQuery.browser.chrome || jQuery.browser.firefox ) {

		var button,
		buttonText;

		// Go through each button
		jQuery('#header-social a').each(function(){

			button = jQuery(this);

			// Initiate if not already initiated
			if ( button.find('span').length < 2 ) {
				buttonText = button.html();
				button.append( buttonText );
			}

			button.find('span:first-child').addClass('header-social-span-1');
			button.find('span:last-child').addClass('header-social-span-2');

		});

	}

}

/**
 * Animate Classes
 */
function meridian_fitness_animate() {

	var delay = 0,
	delayIncrement = 300;

	var selector = '.animate-on-viewport.below-the-fold:in-viewport';
	if ( jQuery('body').hasClass('page-template-template-homepage-php') ) {
		selector = '.animate-on-viewport.below-the-fold:in-viewport-w-offset';
	}

	jQuery(selector).each(function(){

		var _this = jQuery(this);

		_this.removeClass('below-the-fold');

		setTimeout( function(){

			// Add class to show
			jQuery(_this).addClass('in-viewport');
			setTimeout( function() {
				_this.removeClass( 'animate-on-viewport');
			}, 900);

		}, delay );

		if ( _this.data('delay-inc') ) {
			delayIncrement = parseInt( _this.data('delay-inc') );
		}

		// Increase delay for next one
		delay = delay + delayIncrement;

	});

	var selector = '.show-on-viewport.below-the-fold:in-viewport';
	if ( jQuery('body').hasClass('page-template-template-homepage-php') ) {
		selector = '.show-on-viewport.below-the-fold:in-viewport-w-offset';
	}

	jQuery(selector).each(function(){

		var _this = jQuery(this);

		_this.removeClass('below-the-fold');

		// Add class to show
		jQuery(_this).addClass('in-viewport');
		setTimeout( function() {
			_this.removeClass( 'show-on-viewport');
		}, 900);

	});

	jQuery('#header').addClass('start-animation');

}

/**
 * Generate Tabs
 */
function meridian_fitness_tabs() {

	jQuery('.tabs').each(function(){

		var tabs = jQuery('.tabs'),
		tabItems = tabs.find('.tabs-tab'),
		tabNav = '';

		tabItems.each(function(){

			var tabTitle = jQuery(this).data('title');
			tabNav = tabNav + '<a href="#">' + tabTitle + '</a>';

		});

		tabs.find('.tabs-nav').html( tabNav );
		tabs.find('.tabs-nav a:first-child').addClass('active');

	});

	jQuery(document).on( 'click', '.tabs-nav a', function(e){

		e.preventDefault();

		var tabs = jQuery(this).closest('.tabs'),
		index = jQuery(this).index();

		// Change active
		tabs.find('.tabs-nav a.active').removeClass('active');
		jQuery(this).addClass('active');

		// Show tab
		tabs.find('.tabs-tab').hide();
		tabs.find('.tabs-tab:eq(' + index + ')').show();

	});

}

/**
 * Social Sharing
 */

function meridian_themes_social_share( width, height, url ) {

	var leftPosition, topPosition, u, t;
	leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
	topPosition = (window.screen.height / 2) - ((height / 2) + 50);
	var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	u=location.href;
	t=document.title;
	window.open(url,'sharer', windowFeatures);
	return false;

}

/**
 * Slider offset
 */
function meridian_fitness_slider_offset() {

	if ( jQuery(window).width() > 768 && jQuery('body.has-slider').length ) {
		jQuery('#main').css({ marginTop : jQuery('#header').outerHeight() });
	}

}

/**
 * Slider
 */
function meridian_fitness_slider() {

	if ( jQuery('#slider').length ) {

		jQuery('#slider').show();
		jQuery('.slider-nav').show();

		jQuery('#slider').owlCarousel({
			/* autoHeight: true, */
			slideSpeed : 500,
			mouseDrag : true,
			pagination : false,
			singleItem : true,
			scrollPerPage: true,
			afterInit: function( carousel ) {
				meridian_fitness_slider_nav();
				meridian_fitness_slider_offset();
			},
			afterUpdate : function( carousel ) {
				meridian_fitness_slider_center();
				meridian_fitness_slider_offset();
			},
			afterAction: function( carousel ){
				var visible_items = this.owl.visibleItems;
				carousel.find('.slider-item-visible').removeClass('slider-item-visible');
				carousel.find('.owl-item').filter(function(index) {
					return visible_items.indexOf(index) > -1;
				}).addClass('slider-item-visible');
				meridian_fitness_slider_nav();
			}

		});

		// Prev
		jQuery(document).on( 'click', '.slider-nav .prev', function(e) {

			e.preventDefault();

			var carousel = jQuery(this).closest('#slider-container').find('#slider'),
			owl = carousel.data('owlCarousel'),
			carouselNext = carousel.find('.slider-item-visible:first').prev('.owl-item');

			if ( carouselNext.length < 1 ) {
				carouselNext = carousel.find('.owl-item:last-child');
			}

			if ( carouselNext.length ) {

				// Get vars
				var currentSlideInfo = carousel.find('.slider-item-visible .slider-slide-main'),
				topOffset = currentSlideInfo.position().top + 20;

				// Hide the text on the next one
				carouselNext.find( '.slider-slide-main' ).css({ opacity : 0 });

				// Animate
				currentSlideInfo.stop().animate( { top : topOffset, opacity : 0 }, 600, 'easeInOutCubic', function() {

					var _this = jQuery(this);

					// Make it slide
					carousel.data( 'owlCarousel' ).goTo( carouselNext.index() );

					setTimeout( function(){

						_this.css({ top : _this.position().top - 20, opacity : 1 });

						var currentSlideInfo = carousel.find('.slider-item-visible .slider-slide-main'),
						topOffset = currentSlideInfo.position().top - 20;

						currentSlideInfo.css({ top : topOffset }).stop().animate({ top : topOffset + 20, opacity : 1 }, 600, 'easeInOutCubic');

					}, 500);

				});

			}

		});

		// Next
		jQuery(document).on( 'click', '.slider-nav .next', function(e) {

			e.preventDefault();

			var carousel = jQuery(this).closest('#slider-container').find('#slider'),
			owl = carousel.data('owlCarousel'),
			carouselNext = carousel.find('.slider-item-visible:first').next('.owl-item');

			if ( carouselNext.length < 1 ) {
				carouselNext = carousel.find('.owl-item:first-child');
			}

			if ( carouselNext.length ) {

				// Get vars
				var currentSlideInfo = carousel.find('.slider-item-visible .slider-slide-main'),
				topOffset = currentSlideInfo.position().top + 20;

				// Hide the text on the next one
				carouselNext.find( '.slider-slide-main' ).css({ opacity : 0 });

				// Animate
				currentSlideInfo.stop().animate( { top : topOffset, opacity : 0 }, 600, 'easeInOutCubic', function() {

					var _this = jQuery(this);

					// Make it slide
					carousel.data( 'owlCarousel' ).goTo( carouselNext.index() );

					setTimeout( function(){

						_this.css({ top : _this.position().top - 20, opacity : 1 });

						var currentSlideInfo = carousel.find('.slider-item-visible .slider-slide-main'),
						topOffset = currentSlideInfo.position().top - 20;

						currentSlideInfo.css({ top : topOffset }).stop().animate({ top : topOffset + 20, opacity : 1 }, 600, 'easeInOutCubic');

					}, 500);

				});

			}

		});

	}

}

/**
 * Slider Nav
 */
function meridian_fitness_slider_nav() {

	if ( jQuery('#slider').length ) {

		var curr = jQuery('.slider-item-visible');

		// Prev
		if ( curr.prev('.owl-item').length ) {
			var prev = curr.prev('.owl-item');
		} else {
			var prev = jQuery('#slider .owl-item:last-child');
		}

		// Next
		if ( curr.next('.owl-item').length ) {
			var next = curr.next('.owl-item');
		} else {
			var next = jQuery('#slider .owl-item:first-child');
		}

		/**
		 * Update prev
		 */

		// Update BG image
		jQuery('.slider-nav .prev .slider-nav-info').css({ backgroundImage : 'url("' + jQuery('.slider-nav .prev img').attr( 'src' )  + '")' });

		// Hide actual image
		jQuery('.slider-nav .prev img').css({ opacity : 0 });

		// Change the data
		jQuery('.slider-nav .prev h3').text( prev.find('.slider-slide-title').text() );
		jQuery('.slider-nav .prev img').attr( 'src', prev.find('.slider-slide').data('thumbnail') );

		// Fade in the image
		jQuery('.slider-nav .prev img').animate({ opacity : 1 }, 300 );

		/**
		 * Update next
		 */

		// Update BG image
		jQuery('.slider-nav .next .slider-nav-info').css({ backgroundImage : 'url("' + jQuery('.slider-nav .next img').attr( 'src' )  + '")' });

		// Hide actual image
		jQuery('.slider-nav .next img').css({ opacity : 0 });

		// Change the data
		jQuery('.slider-nav .next h3').text( next.find('.slider-slide-title').text() );
		jQuery('.slider-nav .next img').attr( 'src', next.find('.slider-slide').data('thumbnail') );

		// Fade in the image
		jQuery('.slider-nav .next img').animate({ opacity : 1 }, 300 );

	}

}

/**
 * Slider Center
 */
function meridian_fitness_slider_center() {

	if ( jQuery('#slider').length ) {

		jQuery('#slider .slider-slide').each(function(){

			var slide = jQuery(this),
			headerHeight = jQuery('#header-main').outerHeight() + parseInt( jQuery('#header-main').css('top') ),
			slideHeight = slide.height(),
			slideMain = slide.find('.slider-slide-main'),
			slideMainHeight = slideMain.outerHeight(),
			slideMainOffset;

			if ( window.matchMedia('(min-width: 768px)').matches ) {
				slideMainOffset = slideHeight / 2 - slideMainHeight / 2 + headerHeight / 2 - 10;
			} else {
				slideMainOffset = slideHeight / 2 - slideMainHeight / 2;
			}

			slideMain.css({ top : slideMainOffset });

		});

	}

}

/**
 * Carousel
 */

function meridian_fitness_carousel() {

	// If more than 1 slide
	if ( jQuery('.carousel').length > 0 ) {

		jQuery('.carousel:not(.owl-carousel)').each(function(){

			// Show carousel
			jQuery(this).show();

			// Get vars
			var carousel = jQuery(this),
			slider = carousel,
			firstItem = carousel.find('.carousel-item:first-child'),
			spacing = jQuery('.wrapper:last').width() / 100 * 2.76 / 2;

			if ( carousel.hasClass('classes-schedule-carousel') ) {
				spacing = 0;
			}

			// Spacing
			carousel.find('.carousel-item').css({ 'padding-left' : spacing, 'padding-right' : spacing });
			carousel.css({ 'margin-left' : spacing * -1, 'width' : jQuery('.wrapper:last').width() + spacing * 2 });

			if ( ! carousel.hasClass('classes-schedule-carousel') && ! carousel.hasClass('trainers-posts') ) {

				// Content
				var duplicateContent = carousel.html();

				// Duplicate if not iPhone
				if( ! navigator.userAgent.match(/iPhone/i) ) {
					// Duplicate 2x before and after if less than 12
					if ( carousel.find('.carousel-item').length < 12 ) {
						carousel.prepend( duplicateContent );
						carousel.prepend( duplicateContent );
						carousel.append( duplicateContent );
						carousel.append( duplicateContent );
					// If more than 12 duplicate once before and after
					} else {
						carousel.prepend( duplicateContent );
						carousel.append( duplicateContent );
					}
				}

			} else {

				if ( carousel.hasClass('classes-schedule-carousel') ) {

					if ( jQuery('.classes-schedule-col-currday').length ) {
						firstItem = jQuery('.classes-schedule-col-currday');
					} else {
						firstItem = jQuery('.classes-schedule-col:first');
					}

				}

			}

			// Set first carousel item class
			firstItem.addClass('first-carousel-item');

			// Items
			var items = 3;
			if ( carousel.data('carousel-items') !== undefined ) {
				items = parseInt( carousel.data('carousel-items') );
			}

			var itemsTablet = 2;
			var itemsDesktopSmall = items;
			var itemsDesktop = items;
			if ( carousel.closest('.home-classes').length ) {
				itemsDesktopSmall = 2;
			}

			// Initiate carousel
			carousel.owlCarousel({
				slideSpeed : 500,
				mouseDrag : false,
				pagination : false,
				singleItem : false,
				items: items,
				itemsDesktop : [ 1500, itemsDesktop ],
				itemsDesktopSmall : [ 1280, itemsDesktopSmall ],
				itemsTablet : [1024,itemsTablet],
				itemsMobile : [767,1],
				scrollPerPage: true,
				afterAction: function( carousel ){
					var visible_items = this.owl.visibleItems;
					carousel.find('.carousel-item-visible').removeClass('carousel-item-visible');
					carousel.find('.owl-item').filter(function(index) {
						return visible_items.indexOf(index) > -1;
					}).addClass('carousel-item-visible');
				}
			});

			// Jump to first
			var owl = carousel.data('owlCarousel');
			owl.jumpTo( carousel.find('.first-carousel-item').closest('.owl-item').index() );

		});

		// Prev
		jQuery(document).on( 'click', '.carousel-go-prev,.carousel-go-prev-arrow', function() {

			var carousel = jQuery(this).closest('.carousel-container').find('.carousel');
			carousel = carousel.data('owlCarousel');
			carousel.prev();

		});

		// Prev
		jQuery(document).on( 'click', '.carousel-go-next,.carousel-go-next-arrow', function() {

			var carousel = jQuery(this).closest('.carousel-container').find('.carousel');
			carousel = carousel.data('owlCarousel');
			carousel.next();

		});

		setTimeout( function(){
			meridian_fitness_equal_classes_height();
		}, 1000 );

	}

}

/**
 * Retina Images
 */
function meridian_fitness_retina_img_replace() {

	jQuery('img.has-retina-ver').each(function(){

		jQuery(this)
			.css({ height : jQuery(this).height(), width : jQuery(this).width() })
			.attr( 'src', jQuery(this).data('retina-ver') );

	});

}

/**
 * Equalize classes
 */
function meridian_fitness_equal_classes_height() {

	var max = 0;

	jQuery('.home-classes .classes-post-main').each(function(){

		if ( jQuery(this).outerHeight() > max ) {
			max = jQuery(this).outerHeight();
		}

	});

	jQuery('.classes-post-main').each(function(){

		if ( max > 0 ) {
			jQuery('.home-classes .classes-post-main').css({ height : max });
			jQuery('.home-classes .classes-post-main-secondary').css({ height : max - 7 });
		}

	});

	meridian_fitness_equal_classes_cols();

}

/**
 * Equalize classes columns
 */
function meridian_fitness_equal_classes_cols() {

	jQuery('.classes-post-main').each(function(){

		if ( ! jQuery(this).closest('.home-classes').length ) {

			jQuery('.classes-post-main-secondary').css({ height : jQuery(this).closest('.classes-post-main').height() });

		}

	});

}

/**
 * Slider Scroll
 */
function meridian_fitness_slider_scroll() {

	var scrollTop = jQuery(document).scrollTop(),
	opacity = 1 - scrollTop / 1000,
	opacityImg = opacity + 0.1,
	opacityTxt = opacity - 0.1;

	if ( scrollTop < 50 ) {
		opacityImg = 1;
		opacityTxt = 1;
	}

	jQuery('.slider-slide-main').stop().animate({ opacity : opacityTxt }, 100);
	jQuery('.slider-slide-image').stop().animate({ opacity : opacityImg }, 100);

}

function meridian_fitness_center_classes_schedule_details() {

	jQuery('.classes-schedule-col-details').each(function(){

		var height = jQuery(this).outerHeight(),
		parentHeight = jQuery(this).closest('.classes-schedule-col').height(),
		parentMargin = parseInt( jQuery(this).closest('.classes-schedule-col').css( 'margin-top' ) ),
		buttonHeight = jQuery(this).closest('.classes-schedule-col').find('.classes-schedule-col-num').outerHeight( true ),
		headingHeight = jQuery(this).closest('.classes-schedule-col').find('.classes-schedule-col-weekday').outerHeight( true ),
		offset;

		if ( height > ( parentHeight - buttonHeight - headingHeight ) ) {
			offset = ( parentHeight / 2 - height / 2 ) + parentMargin;
		} else {
			offset = ( ( parentHeight - buttonHeight - headingHeight ) / 2 - height / 2 ) + headingHeight + parentMargin;
		}

		jQuery(this).find('.classes-schedule-col-details-item-main').each(function(){

			var itemOffset =  jQuery(this).closest('.classes-schedule-col-details-item').height() / 2 - jQuery(this).outerHeight() / 2;
			if ( itemOffset > 0 ) {
				jQuery(this).css({ marginTop : itemOffset });
			}

		});

		jQuery(this).css({ top : offset }).hide();

	});

}

/**
 * Switch up z index on header and footer ( reveal functionality )
 */
function meridian_fitness_header_footer_z_switch() {

	// Vars
	var scrollTop = jQuery(document).scrollTop(),
	elPos = jQuery('#main').offset().top,
	sweetSpot = elPos - scrollTop;

	// Slider is gone
	if ( sweetSpot < 0 ) {
		jQuery('#header').css({ zIndex : 0 });
		jQuery('#footer').css({ zIndex : 1 });
	// Slider is back
	} else {
		jQuery('#header').css({ zIndex : 1 });
		jQuery('#footer').css({ zIndex : 0 });
	}

}

/**
 * # Ready
 */
jQuery(document).ready(function($){

	// Remove empty paragraphs
	jQuery('p:empty').remove();

	// Show body
	jQuery('body').css({ opacity : 1 });

	// Initiate buttons
	meridian_fitness_buttons();

	// Initiate navigation
	meridian_fitness_navigation();

	// Initiate social
	meridian_fitness_social();

	// Initiate tabs
	meridian_fitness_tabs();

	// Add arrows to navigation items with submenus
	$('#navigation #primary-menu > li:has(ul) > a').append('<span class="fa fa-chevron-down"></span>');

	// Scroll to top hook
	$('.scroll-to-top').on( 'click', function(){ $('html, body').animate({ scrollTop: 0 }, 1000); });

	/**
	 * Header Search
	 */

	// Mobile Nav
	$('.header-search-mobile-nav-hook select').change(function() { window.location = $(this).val(); });

	// Focus on click
	$('.header-search-placeholder').click(function(){ $('.header-search input[type="text"]').focus(); });

	// Show/Hide Placeholder
	$('.header-search input[type="text"]').keyup(function() {
		if ( $(this).val() == '' ) {
			$('.header-search-placeholder').show();
		} else {
			$('.header-search-placeholder').hide();
		}
	});

	// Show Search
	$(document).on( 'click', '.header-search-hook-show', function(e) {

		e.preventDefault();

		var parent = $(this).closest('#header-social'),
		holder = parent.find('.header-search'),
		form = holder.find('form'),
		input = holder.find('input[type="text"]');

		input.focus();

		holder.stop().animate({ width : form.outerWidth() }, 300, function(){
			holder.find( '.header-search-hook-hide' ).stop().animate({ opacity : 1 }, 200);
			holder.find( '.header-search-placeholder' ).stop().animate({ opacity : 0.6 }, 200);
		});

	});

	// Hide Search
	$(document).on( 'click', '.header-search-hook-hide', function(e) {

		e.preventDefault();

		var parent = $(this).closest('#header-social'),
		holder = parent.find('.header-search'),
		form = holder.find('form');

		holder.find( '.header-search-placeholder, .header-search-hook-hide' ).stop().animate({ opacity : 0 }, 200, function(){
			holder.stop().animate({ width : 0 }, 300 );
		});

	});

	/**
	 * Pagination
	 */

	// Load More
	$(document).on( 'click', '.pagination-load-more a', function(e) {

		e.preventDefault();

		if ( $(this).parent().hasClass('active') ) {

			// Vars
			var _this = $(this),
			module = $(this).closest('.posts-listing'),
			pagination = module.find('.pagination'),
			postsContainer = module.find('.posts-listing-inner'),
			moduleID = module.attr('id'),
			pagLink = _this.attr('href'),
			tempHolder = module.find('.load-more-temp');

			// Spin animation
			_this.find('.fa').addClass('fa-spin');

			// Make ajax request
			tempHolder.load( pagLink + ' .posts-listing', function(){

				// Add new posts to temporary holder
				postsContainer.append( tempHolder.find('.posts-listing-inner').html() );

				// Replace pagination temorray holder
				module.find('.pagination').html( tempHolder.find('.pagination').html() );

				// Initiate buttons
				meridian_fitness_buttons();

				// Initiate classes height equalization
				meridian_fitness_equal_classes_height();

				// Change the pagination HTML
				pagination.replaceWith( tempHolder.find('.pagination') );

				// Clean temporary holder
				tempHolder.html('');

			});
		}

	});

	/**
	 * Gallery Images Popup
	 */

	// Trigger click on gallery
	$(document).on( 'click', '.classes-post-single-gallery-item', function(){

	 	var imageIndex = jQuery(this).index() + 1;
	 	jQuery(this).closest('.classes-post-single-gallery-items').siblings('.hidden-lightbox-gallery').find('a:nth-child(' + imageIndex + ')').click();

	});

	// Initiate popup
	$('.hidden-lightbox-gallery').magnificPopup({
		delegate: 'a',
		gallery: {
			enabled: true
		},
		type: 'image'
	});

	/**
	 * Classes Schedule AJAX
	 */

	// Switch months
	$('body').on( 'click', '.classes-schedule-month-action-next, .classes-schedule-month-action-prev', function(e){

		e.preventDefault();

		var month = $(this).data('month'),
		year = $(this).data('year'),
		type = $(this).data('type');

		jQuery.post(

			MeridianAjax.ajaxurl,
			{
				action : 'meridian-fitness-cs-calendar',
				mrd_cs_month : month,
				mrd_cs_year : year,
				mrd_cs_type : type
			},
			function( response ) {

				$('.classes-schedule-wrapper').replaceWith( response.output );

				meridian_fitness_carousel();
				meridian_fitness_center_classes_schedule_details();

			}

		);

	});

	// Show info about classes
	$(document).on( 'click', '.classes-schedule-col-num:not(.classes-schedule-col-num-no-classes)', function(){

		var parent = $(this).closest('.classes-schedule-col'),
		popup = parent.find('.classes-schedule-col-details'),
		popupHeading = parent.find('.classes-schedule-col-details-heading'),
		popupItems = parent.find('.classes-schedule-col-details-item'),
		durInitial = 300,
		durInitial2 = 200,
		delHeading = durInitial + durInitial2,
		durHeading = 300,
		delItems = delHeading + durHeading,
		durItems = 300;

		$('.classes-schedule-col-details:visible').find('.classes-schedule-col-details-heading-close').trigger('click');
		if ( $(this).closest('.classes-schedule-carousel').length ) {
			parent.closest('.owl-item').css( 'z-index', '1' ).siblings('.owl-item').css( 'z-index', 'auto' );
			parent.closest('.classes-schedule-cal').addClass('classes-details-shown');
			parent.addClass('classes-details-shown-col');
			jQuery('body').css({ 'overflow-x' : 'hidden'});
			parent.closest('.carousel-container').find('.carousel-go-prev-arrow,.carousel-go-next-arrow').hide();
		} else {
			parent.css( 'z-index', '1' ).siblings('.classes-schedule-col').css( 'z-index', 'auto' );
		}

		/* Preparation */

		popup.show();

		popupItems.css({
			opacity: 0,
			x : 100
		});

		popupHeading.css({
			y : -40
		});

		popup.css({
			scale : 0,
			opacity : 1,
			y : popup.height()
		});

		/* Animation */

		popup.transition({
			scale : 1.1,
			y : 0,
			duration : durInitial
		}).transition({
			scale : 1,
			duration : durInitial2
		});

		popupHeading.transition({
			y : 0,
			duration : delHeading,
			delay: durHeading
		});

		popupItems.each(function(){

			$(this).transition({
				delay : delItems,
				duration : durItems,
				x : 0,
				opacity : 1
			});

			delItems += durItems / 2;

		});

	});

	// Close info about classes
	$(document).on( 'click', '.classes-schedule-col-details-heading-close', function(){

		var parent = $(this).closest('.classes-schedule-col'),
		popup = parent.find('.classes-schedule-col-details'),
		popupHeading = parent.find('.classes-schedule-col-details-heading'),
		popupItems = parent.find('.classes-schedule-col-details-item'),
		durItems = 300,
		delItems = 0;

		popupHeading.transition({
			y : -40,
			duration : 300
		});

		popupItems.each(function(){

			$(this).transition({
				opacity : 0,
				x : 100,
				duration : durItems,
				delay : delItems
			});

			delItems += durItems / 3;

		});

		popup.transition({
			scale : 0,
			opacity : 0,
			duration : 300,
			delay : delItems + 300
		});

		parent.closest('.classes-schedule-cal').removeClass('classes-details-shown');
		parent.removeClass('classes-details-shown-col');
		jQuery('body').css({ 'overflow-x' : 'visible'});
		parent.closest('.carousel-container').find('.carousel-go-prev-arrow,.carousel-go-next-arrow').show();

	});

	// Close info about classes ( click outside )
	$(document).on( 'click', function(event) {
		if ( $( '.classes-details-shown-col' ).length ) {
			if( ! $(event.target).closest('.classes-details-shown-col').length ) {
				$('.classes-details-shown-col .classes-schedule-col-details-heading-close').trigger('click');
			}
		}
	});

});

/**
 * # Load
 */
jQuery(window).load(function(){

	// Hide the overlay
	jQuery('#page-overlay').hide();

	// Set up for footer reveal
	jQuery('#footer-posts').css({ marginBottom : jQuery('#footer').outerHeight() });

	// Equal contact page columns
	meridian_fitness_equal_contact();

	// Animate in the classes
	meridian_fitness_animate();

	// Init carousel
	meridian_fitness_carousel();

	// Init slider
	meridian_fitness_slider();

	// Init slider center
	meridian_fitness_slider_center();

	// Init classes schedule center
	meridian_fitness_center_classes_schedule_details();

	// Init classes center
	meridian_fitness_equal_classes_height();

	// Animations
	if ( jQuery('body').hasClass( 'page-template-template-homepage' ) ) {
		var holdFor = 800;
	} else {
		var holdFor = 0;
	}

	if ( window.matchMedia('(min-width: 768px)').matches ) {

		jQuery('.classes-post:not(.carousel-item), .blog-post:not(.carousel-item), .trainers-post:not(.carousel-item), .classes-schedule-wrapper, body.single #content, body.single #sidebar, .about-author, .comment-list .comment, #respond, .carousel-item-visible').addClass('animate-on-viewport');
		jQuery('.home-info-section-1-image, .home-info-section-1-content, .home-subscribe h2, .home-subscribe h4, .home-subscribe-form, .home-info-section-2-image, .home-info-section-2-content').addClass('animate-on-viewport');
		jQuery('.info-box, .tabs').addClass('animate-on-viewport');

		jQuery('.carousel .owl-item:not(.carousel-item-visible)').not(':left-of-screen').not(':right-of-screen').addClass('animate-on-viewport');

		jQuery('.home-welcome-primary, .home-welcome-secondary').addClass('animate-on-load');

		// Remove from classes schedule
		jQuery('.home-classes-schedule .animate-on-viewport').removeClass('animate-on-viewport');
		jQuery('.home-classes-schedule .carousel-item-visible').addClass('animate-on-viewport').data('delay-inc', 200);

	}

	setTimeout( function(){

		jQuery('.animate-on-load').addClass('loaded');
		setTimeout( function(){
			jQuery('.animate-on-load').removeClass('animate-on-load');
		}, 800);

		if ( jQuery('body').hasClass('page-template-template-homepage-php') ) {

			jQuery('.animate-on-viewport:below-the-fold-w-offset').addClass('below-the-fold');
			jQuery('.animate-on-viewport:above-the-top-w-offset').addClass('below-the-fold');

			jQuery('.show-on-viewport:below-the-fold-w-offset').addClass('below-the-fold');
			jQuery('.show-on-viewport:above-the-top-w-offset').addClass('below-the-fold');

		} else {

			jQuery('.animate-on-viewport:below-the-fold').addClass('below-the-fold');
			jQuery('.animate-on-viewport:above-the-top').addClass('below-the-fold');

			jQuery('.show-on-viewport:below-the-fold').addClass('below-the-fold');
			jQuery('.show-on-viewport:above-the-top').addClass('below-the-fold');

		}

		var delay = 0,
		delayIncrement = 400;

		var selector = '.animate-on-viewport:in-viewport';
		if ( jQuery('body').hasClass('page-template-template-homepage-php') ) {
			selector = '.animate-on-viewport:in-viewport-w-offset';
		}

		jQuery(selector).each(function(){

			var _this = jQuery(this);

			_this.removeClass('below-the-fold');

			setTimeout( function(){

				// Add class to show
				jQuery(_this).addClass('in-viewport');
				setTimeout( function() {
					_this.removeClass( 'animate-on-viewport');
				}, 900);

			}, delay );

			if ( _this.data('delay-inc') ) {
				delayIncrement = parseInt( _this.data('delay-inc') );
			}

			// Increase delay for next one
			delay = delay + delayIncrement;

		});

	}, holdFor );

	/**
	 * Retina
	 */
	var retina = window.devicePixelRatio > 1;
	if ( retina ) {
		jQuery('body').addClass('retina');
		meridian_fitness_retina_img_replace();
	} else {
		jQuery('body').addClass('not-retina');
	}

	/**
	 * Reloading page
	 */

	var startMode;

	if ( window.matchMedia('(max-width: 479px)').matches )
		startMode = 'portrait';
	else if ( window.matchMedia('(min-width: 480px)').matches && window.matchMedia('(max-width: 767px)').matches )
		startMode = 'landscape';
	else if ( window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1023px)').matches )
		startMode = 'tablet';
	else if ( window.matchMedia('(min-width: 1024px)').matches && window.matchMedia('(max-width: 1280px)').matches )
		startMode = 'monitor-small'
	else if ( window.matchMedia('(min-width: 1281px)').matches && window.matchMedia('(max-width: 1500px)').matches )
		startMode = 'monitor-medium';
	else
		startMode = 'big'

	jQuery('#page').data( 'start-mode', startMode);

});

/**
 * # Scroll
 */
jQuery(window).scroll(function(){

	// Switch up z index on header and footer ( reveal functionality )
	meridian_fitness_header_footer_z_switch();

	// Animate in the classes
	meridian_fitness_animate();

	// Slider scroll
	meridian_fitness_slider_scroll();

});

/**
 * # Resize
 */
jQuery(window).resize(function(){

	// Equal contact page columns
	meridian_fitness_equal_contact();

	// Slider info center
	meridian_fitness_slider_center();

	// Slider offset
	meridian_fitness_slider_offset();

	if ( jQuery('#page.reloading').length < 1 ) {

			var startMode = jQuery('#page').data('start-mode');
			var currMode;

			/**
			 * Current Mode
			 */

			if ( window.matchMedia('(max-width: 479px)').matches )
				currMode = 'portrait';
			else if ( window.matchMedia('(min-width: 480px)').matches && window.matchMedia('(max-width: 767px)').matches )
				currMode = 'landscape';
			else if ( window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1023px)').matches )
				currMode = 'tablet';
			else if ( window.matchMedia('(min-width: 1024px)').matches && window.matchMedia('(max-width: 1280px)').matches )
				currMode = 'monitor-small'
			else if ( window.matchMedia('(min-width: 1281px)').matches && window.matchMedia('(max-width: 1500px)').matches )
				currMode = 'monitor-medium';
			else
				currMode = 'big'

			if ( startMode != currMode ) {
				location.reload();
				jQuery('#page').addClass('reloading');
			}

		}

	});
