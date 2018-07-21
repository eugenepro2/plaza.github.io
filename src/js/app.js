import './import/image';
import './import/home';
import './import/parallax';
import './import/slider';
import './import/modal';



$('form input').change(function() {
  var text = '';
  var n = this.files.length;
  if(n < 2) {
    text = 'файл';
  } else if(n >= 2 && n < 5) {
    text = 'файла';
  } else if(n >= 5 && n < 20) {
    text = 'файлов';
  }
  $('form .upload p').text(n + ' ' + text);
});
