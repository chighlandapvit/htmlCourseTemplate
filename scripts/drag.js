let option = document.getElementsByClassName('option');

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
