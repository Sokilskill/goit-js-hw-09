import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const firstDelay = Number(formData.get('delay'));
  const step = Number(formData.get('step'));
  const amount = Number(formData.get('amount'));

  // const amountInput = document.querySelector('[name="amount"]');
  // const amount = parseInt(amountInput.value);

  createPromises(firstDelay, step, amount);
  createPromi(firstDelay, step, amount);
}

function createPromises(firstDelay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    const currentDelay = firstDelay + (i - 1) * step;
    // console.log(currentDelay, firstDelay, (i - 1) * step);

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

// function createPromi(delay, step, amount) {
//   for (let i = 1; i <= amount; i += 1) {
//     const position = i + 1;
//     console.log(position, delay);

//     createPromise(position, delay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += step;
//   }
// }
