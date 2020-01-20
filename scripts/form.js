let choiceForm = document.getElementById('choiceForm');
let choiceBtns = document.getElementsByClassName('choiceBtn');
let val;

choiceForm.addEventListener('submit', function(e) {
  e.preventDefault();

  for (let i = 0; i < choiceBtns.length; i++) {
    if (choiceBtns[i].checked) {
      console.log(choiceBtns[i].value);
    }
  }
});
