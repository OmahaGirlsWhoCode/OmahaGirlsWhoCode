$(document).ready(function() {
  function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  for (var i = 0; i < 57; i++) {
    var width = getRandomSize(200, 400);
    var height =  getRandomSize(200, 400);
    $('#photos').append('<div class="img-container" style="width='
      + width + 'px; height=' + height + 'px"><img src="img/girls/facebook-album/' +
      (i + 1) + '.jpg"><div class="glass">needs caption</div></div>');
  }
});

$(document).ready(function(i) {
  var colo_classes = ['red', 'blue', 'green', 'pink', 'orange', 'yellow', 'purple', 'blue-yellow', 'pink-yellow', 'red-blue'],
      tint_classes = ['dark', 'light'],
      pictures = document.getElementsByClassName('img-container')

  var i = 0,j = 0;
 
  setInterval(function() {
    if (i === colo_classes.length) {
      i = 0;
      j++;
    }
    if (j === tint_classes.length) {
      j = 0;
    }
    $('.img-container').removeClass().addClass('blend-'+colo_classes[i]+'-'+tint_classes[j]+' img-container');
    i++;
  }, 1000);
});