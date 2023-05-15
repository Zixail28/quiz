const questions = [{   // type = "radio" / 1-6 options | type = "select" / 1-Infinity options
  question: "Для кого вы ищете учебное заведение?",
  options: {
    type: "radio",
    name: "who",
    content: [{
      text: "Себе"
    },{
      text: "Супругу/супруге"
    },{
      text: "Родственнику"
    },{
      text: "Коллеге"
    },{
      text: "Ребенку"
    },{
      text: "Другое"
    },],
  }
},{
  question: "В каком городе планируете поступать?",
  options: {
    type: "select",
    theme: "Город",
    name: "city",
    content: [{
      text: "Санкт-Петербург"
    },{
      text: "Москва"
    },{
      text: "Новосибирск"
    },{
      text: "Нижний новгород"
    },{
      text: "Ростов-на-Дону"
    },{
      text: "Екатеринбург"
    },{
      text: "Краснодар"
    },],
  }
},{
  question: "Какое образование уже есть?",
  options: {
    type: "radio",
    name: "education",
    content: [{
      text: "9 классов"
    },{
      text: "Колледж/техникум"
    },{
      text: "11 классов"
    },{
      text: "11 классов"
    },{
      text: "Училище"
    },{
      text: "Неоконченное высшее"
    },],
  }
},{
  question: "Куда планируете поступать?",
  options: {
    type: "radio",
    name: "planning",
    content: [{
      text: "Вуз"
    },{
      text: "Колледж/техникум"
    },{
      text: "Училище"
    },],
  }
},{
  question: "Какую форму обучения предпочитаете?",
  options: {
    type: "radio",
    name: "form-education",
    content: [{
      text: "Очную"
    },{
      text: "Заочную"
    },{
      text: "Дистанционную"
    },],
  }
},{
  question: "Рассматриваете платное обучение?",
  options: {
    type: "radio",
    name: "paid-training",
    content: [{
      text: "Нет, только бюджет"
    },{
      text: "Да, планирую учиться платно"
    },{
      text: "Возможны оба варианта"
    },],
  }
},{
  question: "Какая специальность интересует?",
  options: {
    type: "select",
    theme: "Специальность",
    name: "specialty",
    content: [{
      text: "Экономика"
    },{
      text: "Философия"
    },{
      text: "Социология"
    },{
      text: "Юриспруденция"
    },{
      text: "Менеджмент"
    },{
      text: "Екатеринбург"
    },{
      text: "Краснодар"
    },],
  }
},{
  question: "Как скоро планируете поступать?",
  options: {
    type: "radio",
    name: "how-soon",
    content: [{
      text: "Как можно быстрее"
    },{
      text: "Месяц"
    },{
      text: "Квартал"
    },{
      text: "Полгода"
    },{
      text: "Год"
    },],
  }
},];

export default questions;