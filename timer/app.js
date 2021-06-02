// COUNTDOWN
let daysInput = document.getElementById("days");
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");

let inputs = document.getElementsByClassName(
  "countdown-container__card--data--p"
);

//

const countdownDate = new Date("June 26, 2021 10:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  // Time calculations
  let days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display on the front
  daysInput.textContent = days.toString().padStart(2, 0);
  hoursInput.innerHTML = hours.toString().padStart(2, 0);
  minutesInput.innerHTML = minutes.toString().padStart(2, 0);
  secondsInput.innerHTML = seconds.toString().padStart(2, 0);
}, 1000);
