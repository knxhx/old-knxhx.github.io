// This could probably use a little cleanup

import countdownJS from 'countdown';

function getCountdownInterval (start, end) {
  return countdownJS(
    start,
    end,
    countdownJS.MONTHS | countdownJS.DAYS | countdownJS.HOURS | countdownJS.MINUTES | countdownJS.SECONDS,
    5,
    0
  );
}

function countdownRender (element, countdownObject) {
  const { months, days, hours, minutes, seconds } = countdownObject;

  const twoDigits = int => 9 < int ? int : `0${int}`;

  element.innerHTML    = `
        <span class="months">${twoDigits(months)} Months</span>
        <span class="days">${twoDigits(days)} Days</span>
        <span class="hours">${twoDigits(hours)} Hours</span>
        <span class="minutes">${twoDigits(minutes)} Minutes</span>
        <span class="seconds">${twoDigits(seconds)} Seconds</span>
        `;
}

function countdown (selector, options = {}) {
  const anchor = document.querySelector(selector);

  const {
          // Destructure and set defaults
          startDate = new Date(2000, 0, 1),
          endDate   = new Date()
        } = options;

  // Initial Run
  countdownRender(
    anchor,
    getCountdownInterval(
      startDate,
      endDate
    )
  );
  // Interval Run
  setInterval(() =>
    countdownRender(
      anchor,
      getCountdownInterval(
        startDate,
        endDate
      )
    ), 1000);
}

export { countdown };