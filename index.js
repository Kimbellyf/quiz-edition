//import  questions  from "./questions.js"
const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")


const $textAnswerContainer = document.querySelector(".explication-container")
const $textAnswerOrigin = document.querySelector(".textAAnswer")

const $buttonVerResp = document.querySelector(".btresp")

const $elementSoStart = document.querySelector(".controls-container-just-inicio")
const $titlebancoquestoes = document.getElementById("titlebancoquestoes")

const totalQuestoes = questionsAll.length;

const $elementIntervaloQuestaoInicio = document.getElementById("intervaloinicio")
const $elementIntervaloQuestaoFim = document.getElementById("intervalofim")

let intervaloQuestaoInicio = 0
let intervaloQuestaoFim = 0

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let questions = []

window.onload = function(){
  var buttons = document.querySelectorAll('.button');

  var maxWidth = 0;

  for(var i=0; i< buttons.length; i++){
    if(buttons[i].offsetWidth> maxWidth){
      maxWidth = buttons[i].offsetWidth;
    }
  }
  for(var i = 0; i<buttons.length; i++){
    buttons[i].style.minWidth = maxWidth + px;
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
function getIntervaloQuestoes(){
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
    const newAsnwer = document.createElement("select")
    answeroptions.forEach(answer => {
      const option = document.createElement("option")
      option.textContent = answer.text

      if (answer.correct) {
        option.dataset.correct = answer.correct
      }
      newAsnwer.appendChild(newAsnwer)
    });

    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("change", selectAnswer)
  })
}
function addQuestionDragDrop(questao) {

}
function showAnswer(){
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


