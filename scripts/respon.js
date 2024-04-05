function resizePDFContainer() {
  var pdfIframe = document.getElementById('pdf-iframe');
  var pdfContainer = pdfIframe.parentNode;
  var containerWidth = pdfContainer.offsetWidth;
  var containerHeight = pdfContainer.offsetHeight;
  var iframeAspectRatio = pdfIframe.offsetWidth / pdfIframe.offsetHeight;

  var availableWidth = containerWidth;
  var availableHeight = containerHeight;

  if (containerWidth / containerHeight > iframeAspectRatio) {
    availableWidth = containerHeight * iframeAspectRatio;
  } else {
    availableHeight = containerWidth / iframeAspectRatio;
  }

  pdfIframe.style.width = availableWidth + 'px';
  pdfIframe.style.height = availableHeight + 'px';
}

window.addEventListener('resize', resizePDFContainer);
window.addEventListener('DOMContentLoaded', resizePDFContainer);
