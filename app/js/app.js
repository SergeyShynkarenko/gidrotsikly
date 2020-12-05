$(function(){

	$('.banner-section__slider').slick({
		dots: true,
  	slidesToShow: 1,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/dest/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/dest/arrow-right.svg" alt=""></button>',
	});

	$('.tab').on('click', function(e){
		e.preventDefault();

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

});
