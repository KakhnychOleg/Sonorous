$(document).ready(function () {
  // Mobile menu
  $('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile__nav').toggleClass('open');
    $('.mobile__list').toggleClass('show');
    $('html').toggleClass('hidden');
  });
  for (let a = 1; a <= $(".mobile__item").length; a++){
    $(".mobile__item:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
  };

  // Contact-checkbox
  $(document).on('click', '.checkbox', function(event) {
    if($(this).hasClass('active-check')){
      $(this).find('input').prop('checked',false);
      $('.checkbox[input]').css('opacity', '0');
    }else {
      $(this).find('input').prop('checked',true);
      $('.checkbox[input]').css('opacity', '1');
    }
    $(this).toggleClass('active-check');

    return false;
  });
});

// Animation
// function onEntry(entry) {
//    entry.forEach(change => {
//      if (change.isIntersecting) {
//       change.target.classList.add('element-show');
//      }
//    });
//  }
 
//  let options = {
//    threshold: [0.1] };
//  let observer = new IntersectionObserver(onEntry, options);
//  let elements = document.querySelectorAll('.element-animation');
 
//  for (let elm of elements) {
//    observer.observe(elm);
//  }

