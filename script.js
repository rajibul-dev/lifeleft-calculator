const age = document.getElementById('age');
const lastAge = document.getElementById('last-age');
const btn = document.querySelector('.main-btn');

const crazyText = document.getElementById('crazy');
const daysLeft = document.getElementById('days-left');
const weeksLeft = document.getElementById('weeks-left');
const monthsLeft = document.getElementById('months-left');
const yearsLeft = document.getElementById('years-left');

const result = document.getElementById('answer-box')

btn.addEventListener('click', event => {
  const userAge = age.value;
  const userDays = userAge * 365;
  const userWeeks = userAge * 52;
  const userMonths = userAge * 12;

  const userLastAge = lastAge.value;
  const userLastDay = userLastAge * 365;
  const userLastWweek = userLastAge * 52;
  const userLastMonth = userLastAge * 12;

  const userYearsLeft = userLastAge - userAge;
  const userDaysLeft = userLastDay - userDays;
  const userWeeksLeft = userLastWweek - userWeeks;
  const userMonthsLeft = userLastMonth - userMonths;

  if (userAge !== '' && userLastAge !== '') {

    event.preventDefault();

    daysLeft.textContent = userDaysLeft;
    weeksLeft.textContent = userWeeksLeft;
    monthsLeft.textContent = userMonthsLeft;
    yearsLeft.textContent = userYearsLeft;

    if (userYearsLeft < 0) {
      crazyText.textContent = `Wait what 🤷? You either put wrong values or you're just playing with this app, well, I'll show you the results nonetheless`;
      crazyText.classList.remove('hide');
    } else if (userYearsLeft > 200) {
      crazyText.textContent = `Hello Lucifer! Here's your result, but you sure you're gonna live this long? 🙂`;
      crazyText.classList.remove('hide');
    } else {
      crazyText.classList.add('hide');
    }
    result.classList.remove('hide');

  } else {
    null;
  }
});