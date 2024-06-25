//import  questions  from "./questions.js"

let $startGameButton = ".start-quiz";
let $nextQuestionButton = 0;
let $questionsContainer = 0;
let $questionText = ".question";
let $answersContainer = ".answers-container";
let $answers = ".answer";


let $textAnswerContainer = ".explication-container";
let $textAnswerOrigin = ".textAAnswer";
let $imgOuTabelaAnswer = "imgoutabelaAnswerX";

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
  $imgOuTabelaAnswer = document.getElementById("imgoutabelaAnswerX");

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
  if (questao.typeQuestion === "dragdrop") {
    addQuestionDragDrop(questao)
  } else if (questao.typeQuestion === "multiplecheckboxyesorno") {
    addMultipleCheckbox(questao)
  } else {
    addQuestionSelect(questao)
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
  questao.answers.forEach(answeroptions => {
    answeroptions.forEach(caixa => {
      let divAnswerFinal = `<div id="divanswerdragdrop">`
      if (caixa.function === 'origin') {
        let divdrag = `<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">`
        let optionnumber = 1;
        caixa.options.forEach(option => {
          const idh5 = "id='" + optionnumber + "'";
          const textOption = `<h5 draggable="true" ondragstart="drag(event)"` + idh5 + ` style='margin:auto'>` + option.text + `</h5>`;
          divdrag = divdrag + textOption;
          optionnumber++;
          if (option.correct) {
            if (option.index != "any") {
              divAnswerFinal += 'Ordem:' + option.index;
            }
            divAnswerFinal += `<h5>` + option.text + `</h5>`
          }
        })
        divdrag = divdrag + `</div>`
        divdragAllOptionsAnswer = `<div id="divalloptionsdragdrop"` + divdrag.slice(14) + `</div>`
        divAnswerFinal += `</div>`
        let answerDragDrop = divdragAllOptionsAnswer + divAnswerFinal;
        $answersContainer.insertAdjacentHTML('beforeend', divdrag);
        $imgOuTabelaAnswer.insertAdjacentHTML('beforeend', answerDragDrop);
      }
      else {
        let divdragrecept = `<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`;
        $answersContainer.insertAdjacentHTML('beforeend', divdragrecept);
      }
    })
  });
  $textAnswerOrigin.textContent = questao.explication
  //trat abaixo pq n chama o selectanswer
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++

}

function addMultipleCheckbox(questao) {
  let newAsnwerCheckBoxHtml = '';
  questao.answers.forEach(answer => {
    let optionNumber = 1;
    newAsnwerCheckBoxHtml += `<br><div class="selectyesornoanyanswers">` + answer.text;
    if (answer.correct) {
      //newAsnwer.dataset.correct = answer.correct
      newAsnwerCheckBoxHtml += `<input type="radio" id="check` + optionNumber + `" value=true checked > <label> Sim </label>`
      newAsnwerCheckBoxHtml += `<input type="radio" id="checkf` + optionNumber + `" value=false> <label> Não </label>`
    } else {
      newAsnwerCheckBoxHtml += `<input type="radio" id="check` + optionNumber + `" value=true > <label> Sim </label>`
      newAsnwerCheckBoxHtml += `<input type="radio" id="checkf` + optionNumber + `" value=false checked> <label> Não </label>`
    }
    newAsnwerCheckBoxHtml += `</div>`;
    //$answersContainer.appendChild(newAsnwer)

    //newAsnwer.addEventListener("click", selectAnswer)
    optionNumber++;
  })
  $answersContainer.insertAdjacentHTML('beforeend', newAsnwerCheckBoxHtml);
  $imgOuTabelaAnswer.insertAdjacentHTML('beforeend', newAsnwerCheckBoxHtml);
  $textAnswerOrigin.textContent = questao.explication

  $buttonVerResp.classList.remove("hide")
  //trat abaixo pq n chama o selectanswer
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++


}
function showAnswer() {
  $textAnswerOrigin.classList.remove("hide")
  $imgOuTabelaAnswer.classList.remove("hide")
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
  $textAnswerOrigin.classList.add("hide")
  $imgOuTabelaAnswer.classList.add("hide")
  while ($imgOuTabelaAnswer.firstChild) {
    $imgOuTabelaAnswer.removeChild($imgOuTabelaAnswer.firstChild)
  }

}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function selectAnswer(event) {
  console.log(event)
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
