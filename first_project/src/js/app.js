import slick from 'slick-carousel';

//Slick slider

$('.sliders').slick({ // это изначально slick слайдер для основного блока изображений
  slidesToShow: 1, // по одному слайдеру 
  slidesToScroll: 1, // по одному менять
  arrows: true, // включение стрелок (если не нужны false)
  asNavFor: '.button__slider', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

$('.button__slider').slick({ // настройка навигации
  slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
  asNavFor: '.sliders', // указываем что это навигация для блока выше
  focusOnSelect: true // указываем что бы слайделось по клику
});    

//adaptive menu

$('.toggle-menu').click(function() {
  $(this). toggleClass('active');
  $('.nav-menu').slideToggle(300);
});

//Header position

const BODY = $('body');
function stickyHeader() {

  var nav = $('.js-navigation'),
    set_nav = nav.offset().top;
  var fixed = 'is-fixed';

  $(window).on('scroll', function() {
    var scroll_top = $(this).scrollTop();

    if (scroll_top >= set_nav) {
    	nav.addClass(fixed);
    }
    else {
    	nav.removeClass(fixed);
    }
  });
}
stickyHeader();
