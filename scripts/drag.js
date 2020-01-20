let option = document.getElementsByClassName('option'),
  submitBtn = document.getElementById('submitBtn'),
  dropBox1 = document.getElementById('dropBox1'),
  dropBox2 = document.getElementById('dropBox2'),
  dropBox3 = document.getElementById('dropBox3'),
  dropBoxes = document.getElementsByClassName('dropBox');

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  let id = event.dataTransfer.getData('text');

  let draggableElement = document.getElementById(id);
  let dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
}

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(`DropBox 1 = ${dropBox1.children[0].id}`);
  console.log(`DropBox 2 = ${dropBox2.children[0].id}`);
  console.log(`DropBox 3 = ${dropBox3.children[0].id}`);
});
