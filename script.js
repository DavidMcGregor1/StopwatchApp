const timeElement = document.querySelector(".watch .time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let seconds = 0;
let interval = null;

startButton.addEventListener("click", start);

function timer() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) {
    secs = "0" + secs;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  timeElement.innerText = `${hours}:${mins}:${secs}`;
}

timer();

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}
