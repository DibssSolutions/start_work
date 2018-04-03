//dots menu
var removeClass = true;

$('.toggle__btn').click(function() {
  $(this).parents('.bread-crams').addClass('is-active');
  removeClass = false;
});

$('.dots-menu-close').click(function() {
  $(this).parents('.bread-crams').removeClass('is-active');
});

$('body').click(function() {
  if (removeClass) {
    $('.bread-crams').removeClass('is-active');
  }
  removeClass = true;
});

$(window).on('resize', function() {
  $('.bread-crams').removeClass('is-active');
});



//drop-down
$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
  $('.dropdown-toggle').click( function(event) { // лoвим клик пo ссылки с id="open"
    $('.news-directions') 
      .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
      .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    event.stopPropagation();
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('body').click( function() { // лoвим клик пo крестику или пoдлoжке
    $('.news-directions')
      .animate({opacity: 0, top: '45%'}, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function() { // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
        }
      );
  });
});


//news dots

(function($) {
  var truncate = function(el) {
    var text = el.text(),
      height = el.height(),
      clone = el.clone();

    clone.css({
      position: 'absolute',
      visibility: 'hidden',
      height: 'auto'
    });
    el.after(clone);

    var l = text.length - 1;
    for (; l >= 0 && clone.height() > height; --l) {
      clone.text(text.substring(0, l) + '...');
    }

    el.text(clone.text());
    clone.remove();
  };

  $.fn.truncateText = function() {
    return this.each(function() {
      truncate($(this));
    });
  };
}(jQuery));

$(function() {
  $('.box').truncateText();
});
