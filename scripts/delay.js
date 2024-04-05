document.addEventListener('mousemove', function(e) {
  var cursor = document.querySelector('.cursor');
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  
  setTimeout(function() {
    cursor.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)';
  }, 80);
});
