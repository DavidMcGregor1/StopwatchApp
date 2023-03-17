let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let time = document.querySelector(".time");
let int = null;

document.getElementById("start").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(time, 10);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  time.innerHTML = "00:00:00:000";
});
