// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

flatpickr.l10ns.default.firstDayOfWeek = 1;

const dateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;

let stopTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),

  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      return Notify.failure('Please choose a date in the future');
    }

    // dateTimePicker.value = '';
    clearInterval(stopTime);
    startBtn.disabled = false;
  },
};

flatpickr(dateTimePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timer(setDate) {
  function intervalFunct() {
    const total = Date.parse(setDate) - Date.parse(new Date());

    if (total <= 0) clearInterval(stopTime);

    const { days, hours, minutes, seconds } = convertMs(total);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }
  intervalFunct();
  stopTime = setInterval(() => {
    intervalFunct();
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;

  const seelectedDate = new Date(dateTimePicker.value);
  // console.log(dateTimePicker.value);
  timer(seelectedDate);
});

//
//
//мій спосіб розрахунку, робив до того, коли прочитав до кінця ТЗ
//
// function second(tot) {
//   const seconds = Math.floor((tot / 1000) % 60);
//   secondsEl.textContent = ('0' + seconds).slice(-2);
//   // console.log(seconds);
// }

// function minute(tot) {
//   const minutes = Math.floor((tot / 1000 / 60) % 60);
//   minutesEl.textContent = ('0' + minutes).slice(-2);
//   // console.log(minutes);
// }

// function hour(tot) {
//   const hours = Math.floor((tot / 1000 / 60 / 60) % 24);
//   hoursEl.textContent = ('0' + hours).slice(-2);
//   // console.log(hours);
// }

// function day(tot) {
//   const days = Math.floor(tot / 1000 / 60 / 60 / 24);
//   daysEl.textContent = ('0' + days).slice(-3);
//   // console.log(days);
// }

// function timer(timeEnd) {
//   function intervalFunct() {
//     const total = Date.parse(timeEnd) - Date.parse(new Date());

//     second(total);
//     minute(total);
//     day(total);
//     hour(total);

//     if (total <= 0) clearInterval(stopTime);
//   }
//   intervalFunct();
//   stopTime = setInterval(intervalFunct, 1000);
// }
// startBtn.addEventListener('click', () => {
//   startBtn.disabled = true;
//   const seelectedDate = new Date(dateTimePicker.value);
//   console.log(dateTimePicker.value);
//   timer(seelectedDate);
// });
