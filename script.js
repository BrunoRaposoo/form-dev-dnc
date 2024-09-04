document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('question1').classList.add('active');
});

function nextQuestion(step, choice) {
  var questions = document.querySelectorAll('.question');
  questions.forEach(function(question) {
      question.classList.remove('active');
  });

  var nextQuestionId = `question${step}-${choice}`;
  var nextQuestionElement = document.getElementById(nextQuestionId);
  if (nextQuestionElement) {
      nextQuestionElement.classList.add('active');
  } else if (step === 4) {
      showResult(choice);
  }
}

function showResult(result) {
  var resultElement = document.getElementById('result');
  document.getElementById('final-result').innerText = result;
  resultElement.classList.add('active');
}