$(function(){

	$('.banner-section__slider').slick({
		dots: true,
  	slidesToShow: 1,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/dest/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/dest/arrow-right.svg" alt=""></button>',
	});

	$('.tab').on('click', function(e){
		e.preventDefault();

		$('.tab').removeClass('tab--active');
		$('.tabs-content').removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	})

	$('.products-item__favorite').on('click', function(){
		$('.products-item__favorite').toggleClass('products-item__favorite--active')
	});
});
