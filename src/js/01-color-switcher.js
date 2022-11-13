const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

buttonStart.addEventListener('click', startInterval);

function startInterval(event) {
  timerId = setInterval(bodyRandomColor, 1000);
  buttonStart.disabled = 'true';
}
function bodyRandomColor() {
  body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonStop.addEventListener('click', stopInterval);
function stopInterval(event) {
  clearInterval(timerId);
  buttonStart.removeAttribute('disabled');
}
