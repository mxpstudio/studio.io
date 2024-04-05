document.addEventListener("DOMContentLoaded", function() {
    var contentMobile = document.getElementById("content-mobile");
    var imageMobile = contentMobile.querySelector("img");
    var textMobile = contentMobile.querySelector("p");
    var isAnimatedMobile = false;
  
    function checkScrollMobile() {
      if (!isAnimatedMobile && isElementInViewport(contentMobile)) {
        setTimeout(animateContentMobile, 800); // Imposta un ritardo di 500 millisecondi (0.5 secondi)
        isAnimatedMobile = true;
      }
    }
  
    function animateContentMobile() {
      imageMobile.style.opacity = "1";
      textMobile.style.opacity = "1";
      textMobile.style.transform = "translateY(0)";
    }
  
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    if (contentMobile) {
      window.addEventListener("scroll", checkScrollMobile);
      window.addEventListener("touchstart", checkScrollMobile);
      checkScrollMobile(); // Esegui l'animazione immediatamente al caricamento della pagina
    }
  });
  