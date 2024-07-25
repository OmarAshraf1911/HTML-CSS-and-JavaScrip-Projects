const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerHTML = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      text.innerHTML = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
