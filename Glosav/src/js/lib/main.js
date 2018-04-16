//header menu

$('.toggle-menu').click(function(e) {
  $('.header__navigation').addClass('active-mobile-menu');
  e.preventDefault();
});
$('div.header-mobile-menu-close').click(function(e) {
  $('.header__navigation').removeClass('active-mobile-menu');
  e.preventDefault();
});


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




//drop-down (news page)
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


//animate yakory (contact page)

$(document).ready(function() {
  $('.contact__adress__map').on('click','a', function(event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});


//dots (news page)

$('.text_review').each(function() {
  var review_full = $(this).html();
  var review = review_full;
  if( review.length > 70 )
  {
    review = review.substring(0, 70);
    $(this).html( review + '<div class="read_more"> ... </div>' );
  }
  $(this).append('<div class="full_text" style="display: none;">' + review_full + '</div>');
});
$('.read_more').click(function() {
  $(this).parent().html( $(this).parent().find('.full_text').html() );
});





//block hide 50% (napravlenie podrobno page)
$('.js-drop-back').click(function() {
  var _this = $(this);
  var parent = _this.parents('.podrobno__drop');
  var wrap =  parent.find('.podrobno__content');
  var heightWrap = wrap.data('drop-height');
  var heightInner = parent.find('.podrobno__text').height();

  console.log(heightWrap, heightInner);
  if ( _this.hasClass('open') ) {
    wrap.height(heightWrap);
    $('.js-drop-icon').removeClass('open');
    _this.removeClass('open');
  }else {
    $('.js-drop-back').removeClass('open');
    $('.js-drop-icon').addClass('open');
    _this.addClass('open');
    wrap.height(heightInner);
  }
});

//slider podrobno(on/off)
$('.podrobno__btn-lodmore').click( function(event) {
  event.preventDefault();
  var that = $(this);
  var parent = that.parents('.podrobno__box-slider');

  if(!parent.hasClass('is-open')) {
    parent.addClass('is-open');
    $(this).text('Скрыть'); 
    $('.podrobno__slider').slick('unslick');
  }
  else {
    parent.removeClass('is-open');
    that.text('Смотреть все решения'); 
    $('.podrobno__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: true,
      prevArrow: '.slider-prevArrow',
      nextArrow: '.slider-nextArrow'
    });
  }
});

//Строка поиска

$('body').click(function(e) {
  $('.header__search-input').removeClass('search-active');
  e.preventDefault();
});

$('.icon-search').click(function(e) {
  $('.header__search-input').addClass('search-active');
  e.stopPropagation();
});

//max-text (company page)

$('.block-text').text(function(i, text) {

  if (text.length >= 85) {
    text = text.substring(0, 85);
    var lastIndex = text.lastIndexOf(' '); // позиция последнего пробела
    text = text.substring(0, lastIndex); // обрезаем до последнего слова
  }
  
  $(this).text(text);
  
});

//header length dropdown

$('body').click(function(e) {
  $('.header__length ul').removeClass('length-active');
  e.preventDefault();
});

$('.click-link').click(function(e) {
  $('.header__length ul').addClass('length-active');
  e.stopPropagation();
});


//brends- popup (podrobno page)
$(document).ready(function() {
  $('.js-sberbank-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-sberbank') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-sberbank')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});



$(document).ready(function() {
  $('.js-huawei-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-huawei') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-huawei')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});


$(document).ready(function() {
  $('.js-gazprom-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-gazprom') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-gazprom')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});

$(document).ready(function() {
  $('.js-dell-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-dell') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-dell')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});

$(document).ready(function() {
  $('.js-alfabank-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-alfabank') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-alfabank')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});

$(document).ready(function() {
  $('.js-google-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-google') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-google')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});

$(document).ready(function() {
  $('.js-skb-bank-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-skb-bank') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-skb-bank')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});

$(document).ready(function() {
  $('.js-apple-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-apple') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-apple')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});

$(document).ready(function() {
  $('.js-mts-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-mts') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-mts')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});

$(document).ready(function() {
  $('.js-intel-popup').click( function(event) {
    event.preventDefault();
    $('.podrobno__popup-overlay').fadeIn(400,
      function() {
        $('.js-modal-intel') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
      });
  });

  $('.podrobno__popup-close, .podrobno__popup-overlay').click( function() {
    $('.js-modal-intel')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('.podrobno__popup-overlay').fadeOut(400);
        });
  });
});
