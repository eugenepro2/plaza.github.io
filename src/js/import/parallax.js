import Parallax from 'parallax-js';

if ($('div').hasClass('intro')) {
  
  var scene1 = $('#photo-1').get(0);
  var parallaxInstance1 = new Parallax(scene1);

  var scene2 = $('#photo-2').get(0);
  var parallaxInstance2 = new Parallax(scene2);

  var scene3 = $('#photo-3').get(0);
  var parallaxInstance3 = new Parallax(scene3);

  var scene4 = $('#photo-4').get(0);
  var parallaxInstance4 = new Parallax(scene4);

  var scene5 = $('#photo-5').get(0);
  var parallaxInstance5 = new Parallax(scene5);

  var scene6 = $('#photo-6').get(0);
  var parallaxInstance6 = new Parallax(scene6);

}
$('.parallax').each(function(i) {
  $(this).attr('id', i);
  var parallaxInstance = new Parallax($(`#${i}`).get(0));
});
