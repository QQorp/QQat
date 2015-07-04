import scrollToElement from 'scroll-to-element';

$('.fancy-background').hide(0, function(){
  $('#header-icon').hide(0);
  $('#header-icon').fadeIn(3000);
  $('.fancy-background').fadeIn(1500);
});

$('#scrollToContent').on('click', function() {
  scrollToElement('#content', {
    offset: 0,
    ease: 'in-quad',
    duration: 1500
  });
});
