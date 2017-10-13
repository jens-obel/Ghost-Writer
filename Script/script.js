window.onload = function() {
  playAudio();
  updateDate();
}

function updateDate() {
  var d = new Date();
  document.getElementById("date").innerHTML = d;
}

function playAudio() {
  document.getElementById("audio").play();
  document.getElementById("audio").volume = 0.1;
  document.getElementById("audio").muted = false;
}
