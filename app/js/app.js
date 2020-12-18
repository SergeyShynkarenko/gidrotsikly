$(function(){

	// slider
	$('.banner-section__slider').slick({
		dots: true,
  	slidesToShow: 1,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/dest/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/dest/arrow-right.svg" alt=""></button>',
	});

// tabs
	$('.tab').on('click', function(e){
		e.preventDefault();  //turn off link

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active'); 
		$($(this).attr('href')).addClass('tabs-content--active');
	});


	$('.products-item__favorite').on('click', function(){
		$(this).toggleClass('products-item__favorite--active')
	});

	$('.products-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/dest/arrow-black-left.svg" alt=""></button>',
		nextArrow: '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/dest/arrow-black-right.svg" alt=""></button>',
	});

	$('.filter-style').styler();

	$('.filter__item-drop, .filter__extra').on('click', function(){
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle('200');
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 100000,
  	max: 500000,
  });

	$('.catalog__filter-btngrid').on('click', function() {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
		$('.products-item__wrapper').removeClass('products-item__wrapper--list');
	});

	$('.catalog__filter-btnline').on('click', function() {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.products-item__wrapper').addClass('products-item__wrapper--list');
	});

	$(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing   : "7px",
    normalFill  : "#C4C4C4"
  });

  // burger
  $('.menu__btn').on('click', function(){
  	$('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  })

});
