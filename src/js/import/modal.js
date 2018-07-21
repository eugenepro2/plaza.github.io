$('[data-pop]').on('click', function() {
  let href = $(this).attr('href');

  // if(device.mobile()) {
  //   href = href.replace('#','');
  //   location.href = href + '.html';
  // }
  $(href).fadeIn();
  
  $('body').attr('data-pos', $(window).scrollTop()); 

});

//Close modal
$('.pop__close').on('click', function() {
  $('body').scrollTop($('body').attr('data-pos'));
  // if(device.mobile()) {
  //   window.history.back();
  // }
  $('body').removeClass('is-active');
  $(this).closest('.pop').fadeOut();
  
});
