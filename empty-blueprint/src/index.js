const colors = ["cornFlowerBlue", "purple", "yellow"];

function resizeHandler() {
  let frameWidth = window.innerWidth;
  console.log(frameWidth);
  let resizeLength;

  if (frameWidth <= 700) {
    resizeLength = colors[0];
  } else if (frameWidth > 700 && frameWidth <= 1200) {
    resizeLength = colors[1];
  } else {
    resizeLength = colors[2];
  }
  document.body.className = resizeLength;
}

window.addEventListener("resize", resizeHandler);
