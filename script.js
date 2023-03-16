const timeElement = document.querySelector(".watch .time");
const startButton = document.querySelector("start");
const stopButton = document.querySelector("stop");
const resetButton = document.querySelector("reset");

let seconds = 888;
let interval = null;

function timer() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds % 60;

  timeElement.innerText = `${hours}:${mins}:${secs}`;
}

timer();
