var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {
  document
    .querySelectorAll(".button")
    [j].addEventListener("click", function () {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
    });
}

document.addEventListener("keypress", function (event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("sounds/w.mp3");
      sound1.play();
      break;

    case "a":
      var sound2 = new Audio("sounds/a.mp3");
      sound2.play();
      break;

    case "s":
      var sound3 = new Audio("sounds/s.mp3");
      sound3.play();
      break;

    case "d":
      var sound4 = new Audio("sounds/d.mp3");
      sound4.play();
      break;

    case "j":
      var sound5 = new Audio("sounds/j.mp3");
      sound5.play();
      break;

    case "k":
      var sound6 = new Audio("sounds/k.mp3");
      sound6.play();
      break;

    case "l":
      var sound7 = new Audio("sounds/l.mp3");
      sound7.play();
      break;

    default:
      console.log(key);
  }
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");

  setTimeout(function () {
    activeButton.classList.remove("animation");
  }, 100);
}

// PIANO

const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
