document.addEventListener("DOMContentLoaded", function() {
  var infoItems = document.querySelectorAll(".info-item");
  var socialIcons = document.querySelectorAll('.social-icons a');
  var delay = 200;

  for (var i = 0; i < infoItems.length; i++) {
    (function(index) {
      setTimeout(function() {
        infoItems[index].style.animation = "fade-in 0.8s ease forwards";
      }, index * delay);
    })(i);
  }

  socialIcons.forEach(function(icon, index) {
    setTimeout(function() {
      icon.style.opacity = '1';
    }, index * 200);
  });

  var hiddenText = document.getElementById("hiddenText");
  var logoContainer = document.getElementById("logo-container");
  var logo = document.getElementById("logo");

  hiddenText.addEventListener("click", function() {
    if (hiddenText.style.opacity === "0") {
      hiddenText.style.opacity = "1";
      hiddenText.style.transform = "translateY(0)";
    } else {
      hiddenText.style.opacity = "0";
      hiddenText.style.transform = "translateY(100%)";
    }
  });

  logoContainer.addEventListener("click", function() {
    logo.style.opacity = "0";
    logo.style.transform = "translateY(-100%)";
    hiddenText.style.opacity = "1";
    hiddenText.style.transform = "translateY(0)";
  });

  hiddenText.addEventListener("click", function() {
    hiddenText.style.opacity = "0";
    hiddenText.style.transform = "translateY(100%)";
  });

});
