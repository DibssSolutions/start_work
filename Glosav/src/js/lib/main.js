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
