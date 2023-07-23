const body = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let timeId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  body.style.backgroundColor = getRandomHexColor();

  startBtn.disabled = true;
  stopBtn.disabled = false;

  timeId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearTimeout(timeId);
}

// console.log(count);
// console.dir(stopBtn);
// console.dir(body);
