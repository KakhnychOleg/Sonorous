$(document).ready(function () {
  // Mobile menu
  $('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile__nav').toggleClass('open');
    $('.mobile__list').toggleClass('show');
    $('html').toggleClass('hidden');
  });
  $('.mobile__item').on('click', () => {
    $('.mobile__nav').toggleClass('open');
    $('.mobile__list').toggleClass('show');
    $('.mobile div').toggleClass('active');
    $('html').toggleClass('hidden');
  });
  for (let a = 1; a <= $(".mobile__item").length; a++){
    $(".mobile__item:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
  };

  $(window).scroll(function() {
    if ($(this).scrollTop() > 2500) {
      $('.services-item-line').css({
        'animation-duration': '3s',
        'animation-name': 'slidein',
      });
    }
  });
});


