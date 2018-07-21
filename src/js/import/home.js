$('.home section').hover(
  function() {
    $(this).find('li').addClass('menu__item--current');
  }, function() {
    $(this).find('li').removeClass('menu__item--current');
  }
);

$('.menu--luce').hover(
  function() {
    $(this).find('li').addClass('menu__item--current');
  }, function() {
    $(this).find('li').removeClass('menu__item--current');
  }
);
