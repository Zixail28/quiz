import questions from "../../constans/questions";
import { successSubmitForm } from "../successSumbitPage/successSumbitPage";

export function submitForm(parentEl, rootEl, ans) {
  const container = document.createElement("form");
  container.action = "./submitForm.js";
  container.classList.add("form-container");
  container.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({status: "success", name: radioEl.value, phone: radioElTel.value, email: radioElEmail.value});
    successSubmitForm(rootEl);
    const result = convertData(ans)
    console.table(result);
    return result;
  })

  function convertData(data) {
    const result = {};
    data.map((e, i) => {
      result[i] = {"Question": questions[i].question, "Answer": questions[i].options.content[e].text}
    })
    return result;
  }
  
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("form__input-wrapper")

  const radioEl = document.createElement("input");
  radioEl.classList.add("form__input");
  radioEl.type = "text";
  radioEl.name = "name-input";
  radioEl.id = "name-input";
  radioEl.required = true;
  radioEl.placeholder = "Как вас зовут?";

  const radioElTel = document.createElement("input");
  radioElTel.classList.add("form__input");
  radioElTel.type = "tel";
  radioElTel.name = "tel-input";
  radioElTel.id = "tel-input";
  radioElTel.required = true;
  radioElTel.placeholder = "Номер телефона";

  const radioElEmail = document.createElement("input");
  radioElEmail.classList.add("form__input");
  radioElEmail.type = "email";
  radioElEmail.name = "email-input";
  radioElEmail.id = "email-input";
  radioElEmail.required = true;
  radioElEmail.placeholder = "E-mail";

  
  inputWrapper.append(radioEl);
  inputWrapper.append(radioElTel);
  inputWrapper.append(radioElEmail);

  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("quiz__footer__btn", "form__submit-btn", "btn", "size_long");
  button.textContent = "Получить подборку"

  const warnFooter = document.createElement("div");
  warnFooter.classList.add("form__submit-warn", "size_long");

  const warnFooterLink = document.createElement("a");
  warnFooterLink.classList.add("form__submit-warn__link");
  warnFooterLink.href = "##";
  warnFooterLink.textContent = "Персональных данных";

  warnFooter.append(button, "Нажимая на кнопку, вы даете согласие на обработку своих ");
  warnFooter.append(warnFooterLink);

  container.append(inputWrapper);
  container.append(warnFooter);
  
  

  parentEl.append(container);
}