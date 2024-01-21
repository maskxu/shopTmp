$(window).scroll(function(){
  if ($(window).scrollTop() >= window.innerHeight) {
    $('nav').addClass('fixed-header');
    // $('nav div').addClass('visible-title');
  }
  else {
    $('nav').removeClass('fixed-header');
    // $('nav div').removeClass('visible-title');
  }
});