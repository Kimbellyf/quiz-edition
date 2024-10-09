//import  questions  from "./questions.js"

let $startGameButton = ".start-quiz";
let $nextQuestionButton = 0;
let $questionsContainer = 0;
let $questionText = ".question";
let $answersContainer = ".answers-container";
let $answers = ".answer";

let $startGameButtonSimu1 = ".start-quiz-simu1";
let $startGameButtonSimu2 = ".start-quiz-simu2";
let $startGameButtonSimu3 = ".start-quiz-simu3";
let $startGameButtonSimu4 = ".start-quiz-simu4";
let $startGameButtonSimu5 = ".start-quiz-simu5";




let $textAnswerContainer = ".explication-container";
let $textAnswerOrigin = ".textAAnswer";
let $imgOuTabelaAnswer = "imgoutabelaAnswerX";

let $buttonVerResp = ".btresp";

let $elementSoStart = ".controls-container-just-inicio";
let $titlebancoquestoes = "titlebancoquestoes";

let totalQuestoes = questionsAll.length;

let $elementIntervaloQuestaoInicio = "intervaloinicio";
let $elementIntervaloQuestaoFim = "intervalofim";

let $elementProxButton = "proxbutton"

let intervaloQuestaoInicio = 0
let intervaloQuestaoFim = 0

let currentQuestionIndex = 0
let totalCorrect = 0
let pontosRadioSimOuNao = 0;
let isQuestionRadioSimOuNaoNoMomento = false;

let pontosPorSelectCerto = 0;
let pontosdosSelectCerto =  0;
let ehQuestaoSelectNoMomento = false;


let questions = []

let questionsqerrou = []
let questaoatual;

window.onload = function () {
  getBasicElementsHTML();

  totalQuestoes = questionsAll.length;

  $elementProxButton = document.getElementById("proxB")

  $elementIntervaloQuestaoInicio = document.getElementById("intervaloinicio")
  $elementIntervaloQuestaoFim = document.getElementById("intervalofim")

  $startGameButton.addEventListener("click", startGame)
  $startGameButtonSimu1.addEventListener("click", selecSimu1)
  $startGameButtonSimu2.addEventListener("click", selecSimu2)
  $startGameButtonSimu3.addEventListener("click", selecSimu3)
  $startGameButtonSimu4.addEventListener("click", selecSimu4)
  $startGameButtonSimu5.addEventListener("click", selecSimu5)

  $elementProxButton.addEventListener("click", nextQuestion)
  $nextQuestionButton.addEventListener("click", displayNextQuestion)
  document.addEventListener('keypress', function(e){
    if(currentQuestionIndex!=0){
      if(e.charCode == 13){
        displayNextQuestion()
      }
      if(e.key == "p"){
        showAnswer();
      }
    }
  }, false);
  botoesAndOnLoad();


}
function getBasicElementsHTML(){
  $startGameButton = document.querySelector(".start-quiz")
  $startGameButtonSimu1 = document.querySelector(".start-quiz-simu1")
  $startGameButtonSimu2 = document.querySelector(".start-quiz-simu2")
  $startGameButtonSimu3 = document.querySelector(".start-quiz-simu3")
  $startGameButtonSimu4 = document.querySelector(".start-quiz-simu4")
  $startGameButtonSimu5 = document.querySelector(".start-quiz-simu5")
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
  $elementProxButton = document.getElementById("proxB")

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
function selecSimu1(){
  tipo = -5
  startSimuEscolhido()
}
function selecSimu2(){
  tipo = -6
  startSimuEscolhido()
}
function selecSimu3(){
  tipo = -7
  startSimuEscolhido()
}
function selecSimu4(){
  tipo = -8
  startSimuEscolhido()
}
function selecSimu5(){
  tipo = -9
  startSimuEscolhido()
}
function startSimuEscolhido(){ //tipo1 - tipo eh um numero 
  intervaloQuestaoInicio = tipo
  intervaloQuestaoFim = 1
  document.getElementById('intervaloinicio').value = intervaloQuestaoInicio
  document.getElementById('intervalofim').value = intervaloQuestaoFim
  startGame()

}
function startWithJustTypeQuestion(type) {
  questions = questionsAll.filter((question) => {
    return question.typeQuestion && question.typeQuestion === type;
  });
  console.log(questions);
  displayNextQuestion()

}

function randomQuestions() {
  getIntervaloQuestoes()
  if (intervaloQuestaoInicio === -1) {
    startWithJustTypeQuestion('multiplecheckboxyesorno');
  } else if (intervaloQuestaoInicio === -2) {
    startWithJustTypeQuestion('select');
  } else if (intervaloQuestaoInicio === -3) {
    startWithJustTypeQuestion('dragdrop');
  }
  else if(intervaloQuestaoInicio === -4 
    |  intervaloQuestaoInicio === -5 //K001
    | intervaloQuestaoInicio === -6 //K002
    | intervaloQuestaoInicio === -7 //L001
    | intervaloQuestaoInicio === -8 //L003
    | intervaloQuestaoInicio === -9 //GN001
  ){
    startSimuCairamNasProvasConhecidas(intervaloQuestaoInicio)
  }else if(intervaloQuestaoInicio===-11){
    filtroPergSimENao()
  }
  else {
    questions = questionsAll.slice(intervaloQuestaoInicio, intervaloQuestaoFim)
  }
}
function getIntervaloQuestoes() {
  intervaloQuestaoInicio = parseInt(document.getElementById('intervaloinicio').value)
  intervaloQuestaoFim = parseInt(document.getElementById('intervalofim').value)
}
function startSimuCairamNasProvasConhecidas(codigo = 0){
  if(codigo !== -4){
    let pesquisa = '';
    if(codigo === -5){
      pesquisa = 'K001'
    }
    if(codigo === -6){
      pesquisa = 'K002'
    }
    if(codigo === -7){
      pesquisa = 'L001'
    }
    if(codigo === -8){
      pesquisa = 'L003'
    }
    if(codigo === -9){
      pesquisa = 'GN001'
    }
    questions = questionsAll.filter((question) => {
      return question.filters && (question.filters.includes(pesquisa))
     
    });
  }else {
    questions = questionsAll.filter((question) => {
      return question.filters;
    });
  }
  console.log(questions);
  displayNextQuestion()

}
function filtroPergSimENao(){
  questions = questionsAll.filter((question) => {
    return question.answers && (question.answers.length ===2 && 
      (question.answers[0].text === 'Sim' || question.answers[0].text === 'Sim\n'))
   
  });
  let qtdsim = questions.filter((question) => {
    return question.answers && ( question.answers[0].correct)
   
  });
  console.log(qtdsim);
  console.log(questions);
  displayNextQuestion()
}
function reiniciarTesteSomenteComOsQerrou(){
  $startGameButton.classList.add("hide")
  $elementSoStart.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  questions = questionsqerrou;
  intervaloQuestaoInicio = 0;
  intervaloQuestaoFim = questionsqerrou.length
  currentQuestionIndex = 0;
  totalCorrect = 0;
  totalQuestoes = questionsqerrou.length
  resetState()
  colocandoHTMLQUESTIONAGAin()
  displayNextQuestion()
  questionsqerrou = []
}
function colocandoHTMLQUESTIONAGAin(){
  const htmlQuestionContainer =  `<span class="question" style="overflow: auto;">Pergunta aqui?</span>
  <div class="answers-container" style="overflow: auto;">
    <button class="answer button">Resposta 1</button>
    <select class="selectAnswer button" name="cars" id="cars">
      <option value="voc"></option>
    </select>
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
      <h5 draggable="true" ondragstart="drag(event)" id="drag1"></h5>
    </div>

    <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
  </div>
  <div class="explication-container">
    <div>
      <button id="btverresp" class="btresp" onclick="showAnswer()"> Ver resposta </button>
    </div>f
    <div>
      <textarea id="textAreaAnswerX" class="textAAnswer" style="width:100%" title="resposta explicada"
        rows="5" disabled="true"></textarea>
      <div id="imgoutabelaAnswerX" disable="true"></div>
    </div>
  </div>
  `
  //$questionsContainer.insertAdjacentHTML('beforeend', htmlQuestionContainer);
  $questionsContainer.innerHTML = htmlQuestionContainer;
  getBasicElementsHTML();
}
/* 
function verifyRadioYesOrNo(){
  if(){

  }
}
  */

function displayNextQuestion() {
  if(currentQuestionIndex>0){
    if(isQuestionRadioSimOuNaoNoMomento){
      totalCorrect += pontosRadioSimOuNao<0? 0: pontosRadioSimOuNao;
      if(pontosRadioSimOuNao<0.98){
        questionsqerrou.push(questaoatual)
      }
    }
    if(ehQuestaoSelectNoMomento){
      totalCorrect += pontosdosSelectCerto<0? 0 : pontosPorSelectCerto;
      if(pontosdosSelectCerto<0.98){
        questionsqerrou.push(questaoatual)
      }
    }
  }
  resetState()

  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  let questaoDoMomento = questions[currentQuestionIndex]
  questaoatual = questaoDoMomento

  $questionText.textContent = '';
  $textAnswerOrigin.textContent = '';
  $questionText.insertAdjacentHTML('beforeend', questaoDoMomento.question);
  $answersContainer.style.display = "grid";
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
    addMultipleRadioButtonSimOuNao(questao)
  } else {
    addQuestionSelect(questao)
  }
}
function questoesSimENao(questao) {
  $answersContainer.style.display = "contents";
  questao.answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)
    $answersContainer.insertAdjacentHTML('beforeend', '<br>');

    newAsnwer.addEventListener("click", selectAnswer)
  })
  $textAnswerOrigin.textContent = questao.explication
  $buttonVerResp.classList.remove("hide")
}
function addQuestionSelect(questao) {
  let qtdSelects = questao.answers.length;
  pontosPorSelectCerto = 1/qtdSelects;
  ehQuestaoSelectNoMomento = true;

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
      let listaOpt = new Array(caixa.options.length)
      console.log(listaOpt)
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
              listaOpt[option.index - 1] = `<h5>` + option.text + `</h5>`
            } else {
              listaOpt.push(`<h5>` + option.text + `</h5>`);
            }
          }
        })
        divAnswerFinal += listaOpt.concat();
        divdrag = divdrag + `</div>`
        divdragAllOptionsAnswer = `<div class="divalloptionsdragdrop" disabled` + divdrag.slice(14) + `</div>`
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

  /*
  currentQuestionIndex++
  */

}

function addMultipleRadioButtonSimOuNao(questao) {
  let newAsnwerRadioButtonSimOuNaoHtml = `<div class="grid-container-yes-or-no">
    <div class="grid-item-yes-or-no">
      </div>
      <div class="grid-item-yes-or-no">Sim</div>
      <div class="grid-item-yes-or-no">Não</div>
  `;
  let asnwerRadioButtonSimOuNaoRightHtml = `<div class="grid-container-yes-or-no" disabled>
      <div class="grid-item-yes-or-no">
      </div>
      <div class="grid-item-yes-or-no">Sim</div>
      <div class="grid-item-yes-or-no">Não</div> 
  `;
  let optionNumber = 1;
  questao.answers.forEach(answer => {
    newAsnwerRadioButtonSimOuNaoHtml += `<div class="grid-item-yes-or-no">` + answer.text + `</div>`;
    asnwerRadioButtonSimOuNaoRightHtml += `<div class="grid-item-yes-or-no" disabled>` + answer.text + `</div>`;

    if (answer.correct) { //option yes
      //newAsnwer.dataset.correct = answer.correct
      newAsnwerRadioButtonSimOuNaoHtml += `<div class="grid-item-yes-or-no">
        <input type="radio" id="checkcorrect` + optionNumber + `" value=true>
       </div>
      `
      asnwerRadioButtonSimOuNaoRightHtml += `<div class="grid-item-yes-or-no">
          <input type="radio" id="checkAnswerRightT` + optionNumber + `" value=true checked >
        </div>`
      newAsnwerRadioButtonSimOuNaoHtml += `<div class="grid-item-yes-or-no">
        <input type="radio" id="check` + optionNumber + `" value=false>
       </div>
      `
      asnwerRadioButtonSimOuNaoRightHtml += `<div class="grid-item-yes-or-no">
        <input type="radio" id="checkAnswerRightF` + optionNumber + `" value=false>
      </div>`

    } else { //option nao
      newAsnwerRadioButtonSimOuNaoHtml += `<div class="grid-item-yes-or-no">
        <input type="radio" id="check` + optionNumber + `" value=true >
        </div>
      `
      asnwerRadioButtonSimOuNaoRightHtml += `<div class="grid-item-yes-or-no">
      <input type="radio" id="checkAnswerRightT` + optionNumber + `" value=true >
      </div>`
      newAsnwerRadioButtonSimOuNaoHtml += ` <div class="grid-item-yes-or-no">
        <input type="radio" id="checkcorrect` + optionNumber + `" value=false>
        </div>
      `
      asnwerRadioButtonSimOuNaoRightHtml += ` <div class="grid-item-yes-or-no">
      <input type="radio" id="checkAnswerRightF` + optionNumber + `" value=false checked>
      </div>`
    }
    //$answersContainer.appendChild(newAsnwer)

    //newAsnwer.addEventListener("click", selectAnswer)
    optionNumber++;
  })
  newAsnwerRadioButtonSimOuNaoHtml += `</div>`;
  asnwerRadioButtonSimOuNaoRightHtml += `</div>`;

  $answersContainer.insertAdjacentHTML('beforeend', newAsnwerRadioButtonSimOuNaoHtml);
  $imgOuTabelaAnswer.insertAdjacentHTML('beforeend', asnwerRadioButtonSimOuNaoRightHtml);
  $textAnswerOrigin.textContent = questao.explication

  $buttonVerResp.classList.remove("hide")
  //trat abaixo pq n chama o selectanswer
  $nextQuestionButton.classList.remove("hide")

  addEventListenerRadiosButtonsSimOuNao();

  /*
  currentQuestionIndex++
  */


}
function addEventListenerRadiosButtonsSimOuNao(){
  pontosRadioSimOuNao = 0;
  isQuestionRadioSimOuNaoNoMomento = true;
  const checkboxcorrect1 = document.getElementById("checkcorrect1");
  const checkboxcorrect2 = document.getElementById("checkcorrect2");
  const checkboxcorrect3 = document.getElementById("checkcorrect3");

  const checkboxincorrect1 = document.getElementById("check1");
  const checkboxincorrect2 = document.getElementById("check2");
  const checkboxincorrect3 = document.getElementById("check3");

  checkboxcorrect1.addEventListener("click", function() {
      if (checkboxcorrect1.checked) {
        checkboxincorrect1.checked = false;
        console.log(checkboxcorrect1.value);
        pontosRadioSimOuNao += 0.33
      }
    });
  checkboxcorrect2.addEventListener("click", function() {
    if (checkboxcorrect2.checked) {
      checkboxincorrect2.checked = false;
      pontosRadioSimOuNao += 0.33
      console.log(checkboxcorrect2.value);
    }
  });
  checkboxcorrect3.addEventListener("click", function() {
    if (checkboxcorrect3.checked) {
      checkboxincorrect3.checked = false;
      pontosRadioSimOuNao += 0.33
      console.log(checkboxcorrect3.value);
    }
  });

checkboxincorrect1.addEventListener("click", function() {
  if (checkboxincorrect1.checked) {
    checkboxcorrect1.checked = false;
    pontosRadioSimOuNao -= 0.33

    console.log(checkboxincorrect1.value);
  }
});
checkboxincorrect2.addEventListener("click", function() {
  if (checkboxincorrect2.checked) {
    checkboxcorrect2.checked = false;
    pontosRadioSimOuNao -= 0.33
    console.log(checkboxincorrect2.value);
  }
});
checkboxincorrect3.addEventListener("click", function() {
  if (checkboxincorrect3.checked) {
    checkboxcorrect3.checked = false;
    pontosRadioSimOuNao -= 0.33
    console.log(checkboxincorrect3.value);
  }
});

}
function showAnswer() {
  $textAnswerOrigin.classList.remove("hide")
  $imgOuTabelaAnswer.classList.remove("hide")
}

function resetState() {
  isQuestionRadioSimOuNaoNoMomento = false;
  ehQuestaoSelectNoMomento = false;
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

  if (answerClicked.tagName === "SELECT" ) {
    if (answerClicked.options[answerClicked.selectedIndex].dataset.correct) {
      pontosdosSelectCerto += pontosPorSelectCerto;
      answerClicked.classList.add("correct")
    }
    else{
      pontosdosSelectCerto -= pontosPorSelectCerto; //aj esse caso
      answerClicked.classList.remove("correct")
    }
  }else if(answerClicked.tagName === "BUTTON"){
    if(answerClicked.dataset.correct === 'true'){
      totalCorrect+=1;
    }else{
      questionsqerrou.push(questaoatual);
    }

  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  //totalCorrect+=pontosPorSelectCerto;

  $nextQuestionButton.classList.remove("hide")
  /*
  currentQuestionIndex++
  */
}
function nextQuestion() {
  console.log("next")
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
      message = "Na média"
      break
    default:
      message = "Pode melhorar :("
  }
  message += ` ` + performance.toString() + "%";

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
    <button
      onclick=reiniciarTesteSomenteComOsQerrou()
      class="button"
    >
      Refazer teste somente com as que errou
    </button>
  `
}