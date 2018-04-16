import slick from 'slick-carousel';

$('.main__slider').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: 'unslick'
    }
  ]
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
