import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('form.form');

form.addEventListener('submit', callback);

function callback(event) {
  event.preventDefault();

  let formAmountValue = Number(form.elements.amount.value);
  let formDelayValue = Number(form.elements.delay.value);
  let formStepValue = Number(form.elements.step.value);

  for (let i = 0; i < formAmountValue; i++) {
    let position = i;
    let delay = formDelayValue + formStepValue * i;

    let promise = createPromise(position, delay);
    promise
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  let promiseParams = { position, delay };
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(promiseParams);
      } else {
        reject(promiseParams);
      }
    }, delay);
  });
  return promise;
}
