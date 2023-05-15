import "./style.css";
import mainSvg from "./assets/svg/main.svg";
import questions from "./assets/constans/questions";
import { radioCheckbox } from "./assets/UI/radio/radio";
import { submitForm } from "./assets/UI/submitForm/submitForm";
import { selectBox } from "./assets/UI/select/select";
import { elementCreate } from "./assets/UI/elementCreate/elementCreate";

let backBtn;
let nextBtn;

let stepIndex = 0;

const ans = [];

const mainContainer = document.querySelector("main");

const svg = document.createElement("div");
svg.classList.add("information__logo");
svg.innerHTML += mainSvg;
mainContainer.children[0].append(svg);


renderQues(0);


function renderQues(ques) {
  const quiz = document.querySelector(".quiz__container");
  quiz.innerHTML = "";

  const quizHeader = elementCreate({tagName: "header", classList: ["quiz__content__header", "quiz__header"]});
  const quizContent = elementCreate({tagName: "main", classList: ["quiz__container__content", "quiz__content"]});
  const quizFooter = elementCreate({tagName: "footer", classList: ["quiz__container__footer", "quiz__footer"]});

  const quizHeaderQues = elementCreate({tagName: "h6", classList: ["quiz__header__ques"]});
  const quizHeaderStep = elementCreate({tagName: "p", classList: ["quiz__header__step"], textContent: `Шаг ${ques + 1}/${questions.length + 1}`});
  const quizOpitons = elementCreate({tagName: "main", classList: ["quiz__content__opitons", "quiz__opitons"]});

  if (ques === questions.length) {
    quizHeaderQues.textContent = "Ваша подборка готова! 🥳 Куда нам отправить её?";

    quizHeader.append(quizHeaderQues, quizHeaderStep);
    quizContent.append(quizHeader);
    quiz.append(quizContent, quizFooter);

    submitForm(quizContent, quiz, ans);
    return;
  }

  quizHeaderQues.textContent = questions[ques].question;

  if(questions[ques].options.type === "radio") {
    generateContentRadio(quizOpitons, questions[ques].options, ques);
  };
  if(questions[ques].options.type === "select") {
    generateContentSelect(quizOpitons, questions[ques].options, ques);
  };

  quizOpitons.addEventListener("click", (e) => {
    if(e.target.tagName === "INPUT") {
      enableBtn();
      ans[ques] = e.target.id;
      renderQues(++stepIndex);
    }
  })



  const quizFooterBtnBack = elementCreate({tagName: "button", classList: ["quiz__footer__btn_back", "btn"], innerHTML: `&lt; Назад`});
  const quizFooterBtnNext = elementCreate({tagName: "button", classList: ["quiz__footer__btn", "btn"], innerHTML: `Вперед &gt;`, disabled: !ans[ques] ? true : null});

  quizHeader.append(quizHeaderQues, quizHeaderStep);
  quizContent.append(quizHeader);
  quizContent.append(quizOpitons);
  quizFooter.append(quizFooterBtnBack);
  quizFooter.append(quizFooterBtnNext);
  quiz.append(quizContent, quizFooter);

  initQues();
}

function initQues() {
  backBtn = document.querySelector(".quiz__footer__btn_back");
  nextBtn = document.querySelector(".quiz__footer__btn");

  if(stepIndex === 0) {
    if (backBtn) {
      backBtn.outerHTML = "";
    }
  }
  if(stepIndex === questions.length) {
    if (nextBtn) {
      nextBtn.outerHTML = "";
    }
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      renderQues(--stepIndex);
    });
  };
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      renderQues(++stepIndex);
    });
  };
}

function generateContentRadio(parentEl, options, index) {
  const long = options.content.length <= 3;
  options.content.map((e, i) => {
    const selected = i === +ans[index];
    radioCheckbox(parentEl, i, options.name, e.text, {long, selected})
  })
};

function generateContentSelect(parentEl, options, index) {
  if(!ans[index]) {
    ans[index] = 0;
  }
  selectBox(parentEl, options, Date.now(), {ans, index});
};

function enableBtn() {
  nextBtn.disabled = false;
}