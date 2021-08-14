import "./styles.css";

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}
function onDragOver(event) {
  event.preventDefault();
}
