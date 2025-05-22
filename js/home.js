var audio = document.getElementById("music");
var allowContinue = true;
var song = '../media/ezwinz.mp3';

function proceed() {
  if (allowContinue) {
    document.getElementById("main").style.opacity = 1;
    document.querySelector(".enter").style.opacity = 0;
      document.addEventListener("click", function () {
  document.body.classList.add("background-on");
});
    setTimeout(function () {

      audio.src = song;
      audio.volume = 1;
      audio.loop = true;
      audio.autoplay = true;
      audio.play();
    }, 250);

    setTimeout(function () {
      document.querySelector(".enter").remove();
    }, 1000);

    allowContinue = false;
  }
}

