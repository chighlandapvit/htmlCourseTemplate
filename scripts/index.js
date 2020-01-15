let menuBtn = document.getElementById('menuBtn'),
  menuBox = document.getElementById('menuBox'),
  menuList = document.getElementById('menuList'),
  nextBtn = document.getElementById('nextBtn'),
  mainFrame = document.getElementById('mainFrame');

let hrefArr = ['pages/introduction.html', 'pages/l1p1.html'];

menuBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (hasClass(menuList, 'invisible')) {
    removeClass(menuList, 'invisible');
    menuList.setAttribute('aria-hidden', 'false');
  } else {
    addClass(menuList, 'invisible');
    menuList.setAttribute('aria-hidden', 'true');
  }
});

nextBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let newHref;
  for (i = 0; i < hrefArr.length; i++) {
    if (hrefArr[i] != i) {
      newHref = hrefArr[i];
    } else {
      i + 1;
    } 
  }

  mainFrame.setAttribute('src', newHref);
});

// adds class to element
function addClass(element, className) {
  var currentClassName = element.getAttribute('class');
  if (typeof currentClassName !== 'undefined' && currentClassName) {
    element.setAttribute('class', currentClassName + ' ' + className);
  } else {
    element.setAttribute('class', className);
  }
}
// checks if element has specific class
function hasClass(element, className) {
  if (element.classList) return element.classList.contains(className);
  return !!element.className.match(
    new RegExp('(\\s|^)' + className + '(\\s|$)')
  );
}
// removes class from element
function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);
  else if (hasClass(element, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    element.className = element.className.replace(reg, ' ');
  }
}
