window.onload = function() {
  window.scrollTo(0, 0);
};


function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateIfVisible() {
  var element = document.getElementById('w');
  if (isElementInViewport(element)) {
    element.classList.add('visible');
  }
}

document.addEventListener('scroll', animateIfVisible);
