let choiceForm = document.getElementById('choiceForm'),
  choiceBtns = document.getElementsByClassName('choiceBtn');

// gets values from the selected options when user submits form
choiceForm.addEventListener('submit', buttonCheck);

function buttonCheck(event) {
  event.preventDefault();

  for (let i = 0; i < choiceBtns.length; i++) {
    if (choiceBtns[i].checked) {
      console.log(choiceBtns[i].value);
    }
  }
}

// answer validation
