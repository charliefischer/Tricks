var scroller = new FancyScroll();

var ready = function(){
  scroller.scale = 0.1;
  scroller.check = 50;
  scroller.move = 200;
  scroller.render = 2;

  var items = document.querySelectorAll('.item');
  scroller.setEntries(items);

  resize();
};

var resize = function(){
  var containerWidth = document.getElementById('wrapper').offsetWidth;
  var containerHeight = window.innerHeight;
  scroller.resize(containerWidth, containerHeight);
};

window.onload = ready;
window.addEventListener('resize', resize);