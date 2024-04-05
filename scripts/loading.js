var isFirstLoad = localStorage.getItem('isFirstLoad');

  if (!isFirstLoad) {
    isFirstLoad = true;
    localStorage.setItem('isFirstLoad', isFirstLoad);
  } else {
    isFirstLoad = false;
  }

  window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('.loading-screen');

    if (isFirstLoad) {
      loadingScreen.style.display = 'flex';

      setTimeout(function() {
        loadingScreen.style.display = 'none';
        document.body.style.overflow = 'auto'; 
      }, 2000); 

      isFirstLoad = false;
      localStorage.setItem('isFirstLoad', isFirstLoad);
    } else {
      loadingScreen.style.display = 'none';
      document.body.style.overflow = 'auto'; 
    }
  });