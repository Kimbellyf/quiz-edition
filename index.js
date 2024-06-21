//import  questions  from "./questions.js"

let $startGameButton = ".start-quiz";
let $nextQuestionButton = 0;
let $questionsContainer = 0;
let $questionText = ".question";
let $answersContainer = ".answers-container";
let $answers = ".answer";


let $textAnswerContainer = ".explication-container";
let $textAnswerOrigin = ".textAAnswer";

let $buttonVerResp = ".btresp";

let $elementSoStart = ".controls-container-just-inicio";
let $titlebancoquestoes = "titlebancoquestoes";

let totalQuestoes = questionsAll.length;

let $elementIntervaloQuestaoInicio = "intervaloinicio";
let $elementIntervaloQuestaoFim = "intervalofim";

let intervaloQuestaoInicio = 0
let intervaloQuestaoFim = 0

let currentQuestionIndex = 0
let totalCorrect = 0


let questions = []

window.onload = function () {
  $startGameButton = document.querySelector(".start-quiz")
  $nextQuestionButton = document.querySelector(".next-question")
  $questionsContainer = document.querySelector(".questions-container")
  $questionText = document.querySelector(".question")
  $answersContainer = document.querySelector(".answers-container")
  $answers = document.querySelectorAll(".answer")


  $textAnswerContainer = document.querySelector(".explication-container")
  $textAnswerOrigin = document.querySelector(".textAAnswer")

  $buttonVerResp = document.querySelector(".btresp")

  $elementSoStart = document.querySelector(".controls-container-just-inicio")
  $titlebancoquestoes = document.getElementById("titlebancoquestoes")

  totalQuestoes = questionsAll.length;

  $elementIntervaloQuestaoInicio = document.getElementById("intervaloinicio")
  $elementIntervaloQuestaoFim = document.getElementById("intervalofim")

  $startGameButton.addEventListener("click", startGame)
  $nextQuestionButton.addEventListener("click", displayNextQuestion)
  botoesAndOnLoad();


}

function botoesAndOnLoad() {
  var buttons = document.querySelectorAll('.button');

  var maxWidth = 0;

  for (var i = 0; i < buttons.length; i++) {
    if ((buttons[i] && buttons[i].offsetWidthbuttons) && buttons[i].offsetWidthbuttons[i].offsetWidth > maxWidth) {
      maxWidth = buttons[i].offsetWidth;
    }
  }
  if (!maxWidth | isNaN(maxWidth)) {
    maxWidth = 50;
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.minWidth = maxWidth + 'px';
  }
  $titlebancoquestoes.textContent = "Banco de questões da AZ-104 com " + totalQuestoes.toString() + " questões";
}

function startGame() {
  $startGameButton.classList.add("hide")
  $elementSoStart.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  randomQuestions()
  displayNextQuestion()
}

function randomQuestions() {
  getIntervaloQuestoes()
  questions = questionsAll.slice(intervaloQuestaoInicio, intervaloQuestaoFim)
}
function getIntervaloQuestoes() {
  intervaloQuestaoInicio = parseInt(document.getElementById('intervaloinicio').value)
  intervaloQuestaoFim = parseInt(document.getElementById('intervalofim').value)
}

function displayNextQuestion() {
  resetState()

  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  let questaoDoMomento = questions[currentQuestionIndex]

  $questionText.textContent = questaoDoMomento.question
  if (questaoDoMomento.hasOwnProperty("typeQuestion")) {
    questoesSelectOuDragDrop(questaoDoMomento);
  } else {
    questoesSimENao(questaoDoMomento)
  }
}

function questoesSelectOuDragDrop(questao) {
  if (questao.typeQuestion !== "dragdrop") {
    addQuestionSelect(questao)
  } else {
    addQuestionDragDrop(questao)
  }
}
function questoesSimENao(questao) {
  questao.answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
  $textAnswerOrigin.textContent = questao.explication
  $buttonVerResp.classList.remove("hide")
}
function addQuestionSelect(questao) {
  questao.answers.forEach(answeroptions => {
    const textAnswer = document.createElement("p")
    textAnswer.textContent = answeroptions.text;
    $answersContainer.appendChild(textAnswer)
    const newAsnwer = document.createElement("select")
    answeroptions.options.forEach(answer => {
      const option = document.createElement("option")
      option.textContent = answer.text

      if (answer.correct) {
        option.dataset.correct = answer.correct
      }
      newAsnwer.appendChild(option)
    }

    );
    const textAnswerAfter = document.createElement("h5")
    textAnswer.textContent = answeroptions.text;
    $answersContainer.appendChild(textAnswerAfter)

    $answersContainer.appendChild(newAsnwer)
    $textAnswerOrigin.textContent = questao.explication
    $buttonVerResp.classList.remove("hide")

    newAsnwer.addEventListener("change", selectAnswer)
  })
}
function addQuestionDragDrop(questao) {

}
function showAnswer() {
  $textAnswerOrigin.classList.remove("hide")
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
  $textAnswerOrigin.classList.add("hide")

}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.tagName === "SELECT") {
    if (answerClicked.options[answerClicked.selectedIndex].dataset.correct) {
      answerClicked.classList.add("correct")
    }
  }

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML =
    `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}

