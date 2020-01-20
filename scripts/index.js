let menuBtn = document.getElementById('menuBtn'),
  menuBox = document.getElementById('menuBox'),
  menuList = document.getElementById('menuList'),
  prevBtn = document.getElementById('prevBtn'),
  nextBtn = document.getElementById('nextBtn'),
  pageNum = document.getElementById('pageNum'),
  mainFrame = document.getElementById('mainFrame');

let pageArr = [
    'pages/intro1.html',
    'pages/intro2.html',
    'pages/lesson1/page1.html',
    'pages/lesson1/page2.html',
    'pages/lesson1/page3.html',
    'pages/lesson1/page4.html',
    'pages/lesson1/page5.html'
  ],
  pageAmount = pageArr.length,
  currentPage = 0;

// set iFrame src to the href of the first page in pageArr
mainFrame.setAttribute('src', pageArr[currentPage]);

pageNum.innerHTML = `PAGE 1 OF ${pageAmount}`;

// opens menu(TableOfContents) when clicked
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
// navigates to previous page and displays new current page number
prevBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (currentPage > 0) {
    currentPage -= 1;
    mainFrame.setAttribute('src', pageArr[currentPage]);
  }
  pageNum.innerHTML = `PAGE ${currentPage + 1} OF ${pageAmount}`;
});
// navigates to next page and displays new current page number
nextBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (currentPage >= 0 && currentPage < pageAmount - 1) {
    currentPage += 1;
    mainFrame.setAttribute('src', pageArr[currentPage]);
  }

  pageNum.innerHTML = `PAGE ${currentPage + 1} OF ${pageAmount}`;
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
