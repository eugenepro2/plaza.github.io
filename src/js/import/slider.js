import 'owl.carousel';
import '../lib/thunb';
$('.owl-carousel').owlCarousel({
  items: 1,
  thumbs: true,
  thumbsPrerendered: true,
  nav: true,
  navText: ['<img src="img/left-arrow.svg">', '<img src="img/right-arrow.svg">']
});
