let menuBtn = document.getElementById('menuBtn'),
  menuBox = document.getElementById('menuBox'),
  menuList = document.getElementById('menuList'),
  prevBtn = document.getElementById('prevBtn'),
  nextBtn = document.getElementById('nextBtn'),
  pageNum = document.getElementById('pageNum'),
  mainFrame = document.getElementById('mainFrame'),
  pageAmount;

let pageArr = [
  'pages/introduction.html',
  'pages/introduction2.html',
  'pages/l1p1.html',
  'pages/l1p2.html'
];

let currentPage = 0;

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

prevBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (currentPage > 0) {
    currentPage -= 1;
    mainFrame.setAttribute('src', pageArr[currentPage]);
  }
});

nextBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (currentPage >= 0 && currentPage < pageArr.length - 1) {
    currentPage += 1;
    mainFrame.setAttribute('src', pageArr[currentPage]);
  }

  if (pageArr > 0) {
    pageNum.innerHTML = 'PAGE ' + currentPage + 'of ' + pageAmount;
  }
});

//   prevPage.addEventListener('click', function() {
//     if (currentPage > 1) {
//       currentPage -= 1;
//       frame.src = arr[currentPage].location;
//     }

//     if (arr[currentPage].pageNum > 0) {
//       page.innerHTML = `PAGE ${arr[currentPage].pageNum} of ${pageAmount}`;
//     } else {
//       page.innerHTML = '';
//     }
//   });

//   nextPage.addEventListener('click', function() {
//     if (currentPage >= 0 && currentPage < arr.length - 1) {
//       currentPage += 1;
//       frame.src = arr[currentPage].location;
//     }

//     if (arr[currentPage].pageNum > 0) {
//       page.innerHTML = `PAGE ${arr[currentPage].pageNum} OF ${pageAmount}`;
//     } else {
//       page.innerHTML = '';
//     }
//   });
// }

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
