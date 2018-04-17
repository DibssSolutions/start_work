import slick from 'slick-carousel';

var slider = $('.main__slider');
function initSlider() {
  if ($(window).width() >= 1023) {
    if (!slider.hasClass('slick-initialized')) {

      slider.slick({
        centerMode: true,
        slidesToShow: 3,
        slideToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        prevArrow: false,
        nextArrow: false,
      });
    }
  } else {
    if(slider.hasClass('slick-initialized')) {
      
      slider.slick('unslick');
    }
  }
}
initSlider();

var time_out;  

$(window).on('resize', function() {
  clearTimeout(time_out);
  time_out = setTimeout(function() {
    initSlider();
  }, 300);
  
});


//napravlenie podrobno

$('.podrobno__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  draggable: true,
  prevArrow: '.slider-prevArrow',
  nextArrow: '.slider-nextArrow',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

//vnedrenie

$('.vnedrenie-slider-box').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  draggable: true,
  prevArrow: '.slider-prevArrow',
  nextArrow: '.slider-nextArrow',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
