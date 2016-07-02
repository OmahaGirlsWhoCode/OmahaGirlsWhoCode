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