var x = 0; //Decides which itemin the array
var step;
var q = [
  "What was your parents names?",
  "What do you remember about them from your childhood?",
  "Where were you born?",
  "Tell me about what it was like?"
];

window.onload = function() {
  newQuestion();
  updateSteps();
}

//Insert question
function newQuestion() {
  document.getElementById("question").innerHTML = q[x];
}

//Updates when new step
function nextQuestion() {
  x++;
  step++;
  newQuestion();
  updateSteps();
}

//Updates step counter
function updateSteps() {
  step = 1;
  document.getElementById("steps").innerHTML = "Question " + step;
}
