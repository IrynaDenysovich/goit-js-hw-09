import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectedDate;
const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('input#datetime-picker');

const spanDaysValue = document.querySelector('span[data-days]');
const spanHoursValue = document.querySelector('span[data-hours]');
const spanMinutesValue = document.querySelector('span[data-minutes]');
const spanSecondsValue = document.querySelector('span[data-seconds]');

toggleElement(btnStart, false);
let setIntervalId;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    selectedDate = selectedDates[0];
    if (selectedDates[0] < currentDate) {
      toggleElement(btnStart, false);
      Notify.failure('Please choose a date in the future');
    } else {
      Notify.success('Date is valid');
      toggleElement(btnStart, true);
    }
  },
};

flatpickr(input, options);

function toggleElement(element, value) {
  if (value === false) {
    element.setAttribute('disabled', '');
  } else {
    element.removeAttribute('disabled');
  }
}

btnStart.addEventListener('click', buttonClick);
 
function buttonClick() {
  callbackInterval();
  setIntervalId = setInterval(callbackInterval, 1000);

  toggleElement(input, false);
  toggleElement(btnStart, false);
}

function callbackInterval() {
  const currentTimeMs = Date.now();
  const ms = selectedDate.getTime() - currentTimeMs;
  if (ms <= 0 ){
    clearInterval(setIntervalId);
    return;
  }
  

  const { days, hours, minutes, seconds } = convertMs(ms);

  spanDaysValue.textContent = addLeadingZero(days);
  spanHoursValue.textContent = addLeadingZero(hours);
  spanMinutesValue.textContent = addLeadingZero(minutes);
  spanSecondsValue.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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
