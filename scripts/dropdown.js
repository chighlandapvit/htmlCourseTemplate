let selectForm = document.getElementById('selectForm'),
  selectForm1 = document.getElementById('selectForm1');

// gets values from the selected options when user submits form
selectChoice.addEventListener('submit', optionCheck);

function optionCheck(event) {
  event.preventDefault();

  console.log(selectForm.value);
  console.log(selectForm1.value);
}
