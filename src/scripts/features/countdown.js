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

  const monthTwoDigits = 9 < months ? months : `0${months}`;

  element.innerHTML    = `
        <span class="months">${monthTwoDigits} Months</span>
        <span class="days">${days} Days</span>
        <span class="hours">${hours} Hours</span>
        <span class="minutes">${minutes} Minutes</span>
        <span class="seconds">${seconds} Seconds</span>
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