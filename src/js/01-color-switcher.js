const body = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let count = 0;
let timeId = null;

startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  if (!count) {
    body.style.backgroundColor = getRandomHexColor();
    count += 1;
    timeId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
}

stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
  if (count) {
    clearTimeout(timeId);
    count = 0;
  }
}

// console.log(count);
// console.dir(stopBtn);
// console.dir(body);
