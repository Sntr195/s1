;(function () {




    var showLocalStorage = function(){
        let products;
        let text = "";
        if(localStorage.getItem('products')){
                products = JSON.parse(localStorage.getItem('products'));

                for (i in products){
                    let beforeText;
                    beforeText = products[i].name + ", в кол-ве: " + products[i].quantity + ", \n";

                    text += beforeText;
                }

                 alert("У вас в корзине: " + text);
        }



    }
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		var clone1 = $('#menus').clone();
		$('#mySidenav').append(clone1);


		// $('#page').prepend('<div id="fh5co-offcanvas"/>');
		// $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white" style="position:fixed"><i></i></a>');
		// var clone1 = $('.menu-1 > ul').clone();
		// clone1.find('.header-nav-items').css('background-color','inherit');
		// $('#fh5co-offcanvas').append(clone1);
		// var clone2 = $('.menu-2 > ul').clone();
		// $('#fh5co-offcanvas').append(clone2);

		// $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		// $('#fh5co-offcanvas')
		// 	.find('li')
		// 	.removeClass('has-dropdown');

		// // Hover dropdown menu on mobile
		// $('.offcanvas-has-dropdown').mouseenter(function(){
		// 	var $this = $(this);

		// 	$this
		// 		.addClass('active')
		// 		.find('ul')
		// 		.slideDown(500, 'easeOutExpo');				
		// }).mouseleave(function(){

		// 	var $this = $(this);
		// 	$this
		// 		.removeClass('active')
		// 		.find('ul')
		// 		.slideUp(500, 'easeOutExpo');				
		// });


		// $(window).resize(function(){

		// 	if ( $('body').hasClass('offcanvas') ) {

  //   			$('body').removeClass('offcanvas');
  //   			$('.js-fh5co-nav-toggle').removeClass('active');
				
	 //    	}
		// });



	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var customDropdown = function() {

		$('.custom-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				// .find('.header-nav-items')
				.siblings()
				.css('visibility', 'visible')
				.addClass('animated-fast fadeInUpMenu');

		})
		$('.fh5co-nav').mouseleave(function(){
			$('.header-nav-items')
				// .find('.header-nav-items')
				
				.css('visibility', 'hidden')
				.removeClass('animated-fast fadeInUpMenu');
		})

	};


	var tabs = function() {

		// Auto adjust height
		$('.fh5co-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.fh5co-tab-content-wrap'),
					tabHeight = $('.fh5co-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.fh5co-tab-content-wrap'),
						tabHeight = $('.fh5co-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.fh5co-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.fh5co-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.fh5co-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var addToCart = function() {
		$('.addingToCart').on('click', function (e) {
           // alert("Your values are :"+ $(this).parents('.itemholder').attr('data-id'));
           // alert('Товар добавлен в корзину');
           // let tmp = getCookie("cartids");
           // let currentItemId = $(this).parents('.itemholder').attr('data-id')
            let item_name = $(this).parents('.product').children('.desc').children('h3').children('.item-name').text();
            let productId = $(this).parents('.itemholder').attr('data-id');
           //
			// if (tmp !== undefined){
			// 	if (!tmp.includes(currentItemId)){
			// 	  document.cookie = "cartids=" + tmp + "," + currentItemId + ";";
			// 	}
			// } else {
			// 	document.cookie = "cartids=" + currentItemId;
			// }

            let products = [];
            let q = 1;
            if(localStorage.getItem('products')){
                products = JSON.parse(localStorage.getItem('products'));
            }
            if (!products.some(e => e.productId == productId)){
                products.push({'productId' : productId, quantity : q ,name : item_name});
            } else {
                 for (i in products){
                     if (products[i].productId == productId){
                         products[i].quantity += 1;
                     }

                 }
            }


            localStorage.setItem('products', JSON.stringify(products));

            console.log('Adding item to local storage: ' + $(this).parents('.itemholder').attr('data-id'));



			VanillaToasts.create({
 			 title: 'Товар добавлен в корзину',
  				text: item_name,
				timeout: 2000
			});



        });




	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};



	
	$(function(){
	    showLocalStorage();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		customDropdown();
		tabs();
		addToCart();
		goToTop();
		loaderPage();
		counterWayPoint();
		sliderMain();
		testimonialCarousel();
	});


}());

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

