let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let time = document.querySelector(".time");
let int = null;

document.getElementById("start").addEventListener("click", () => {
  console.log("worjign");
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  time.innerHTML = "00:00:00:00";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let hrs = hours < 10 ? "0" + hours : hours;
  let mins = minutes < 10 ? "0" + minutes : minutes;
  let secs = seconds < 10 ? "0" + seconds : seconds;

  let milisecs =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  console.log("pineapple");

  time.innerHTML = `${hrs}:${mins}:${secs}:${milisecs}`;
}
