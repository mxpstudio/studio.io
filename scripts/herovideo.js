document.addEventListener("DOMContentLoaded", function() {
  var video = document.querySelector(".video-background video");
  
  if (video) {
    video.muted = true;
    video.play();
  }
});
