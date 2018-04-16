import noUiSlider from 'nouislider';

var slider = document.getElementById('polzun');

noUiSlider.create(slider, {
  start: 0,
  range: {
    'min': [0, 1],
    'max': 1
  },
});
slider.noUiSlider.on('update', function( values, handle ) {
  console.log(values,handle,+values[handle]);
  if ( +values[handle] === 1 ) {
    $('.slider__video__wrap').addClass('video-active');
    $('.js-if').attr('src','https://www.youtube.com/embed/PR9zS-O0teM?autohide=1rel=0');
  };
});
$('.slider__video__close').click(function(e) {
  $('.slider__video__wrap').removeClass('video-active');
  $('.js-if').attr('src','');
  e.preventDefault();
});
slider.noUiSlider.set(0);
