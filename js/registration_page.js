const imgCardPersonalInfo = document.querySelectorAll(".image__card")[0];
const imgCardEnglishTest = document.querySelectorAll(".image__card")[1];
const imgCardTechnicalTest = document.querySelectorAll(".image__card")[2];

const titlePersonalInfo = document.querySelectorAll(".card__title")[0];
const titleEnglishTest = document.querySelectorAll(".card__title")[1];
const titleTechnicalTest = document.querySelectorAll(".card__title")[2];

const contentPersonalInfo = document.querySelectorAll(".content__card")[0];
const contentEnglishTest = document.querySelectorAll(".content__card")[1];
const contentTechnicalTest = document.querySelectorAll(".content__card")[2];

const CardPersonalInfo = document.querySelectorAll(".card__registration")[0];
const CardEnglishTest = document.querySelectorAll(".card__registration")[1];
const CardTechnicalTest = document.querySelectorAll(".card__registration")[2];
let data = dataUser;

window.addEventListener("load", function () {
  if (data.statusPersonalInformation == "Done") {
    CardPersonalInfo.style = "border-color: #008274;";
    contentPersonalInfo.style = " background: #008274 ;color: #fff;";
    titlePersonalInfo.style = "background: #008274";
    imgCardPersonalInfo.src = "../assets/icon/done.svg";
  }
  if (data.statusEnglishTest == "Done") {
    CardEnglishTest.style = "border-color: #008274;   cursor: initial;";
    contentEnglishTest.style = " background: #008274 ;color: #fff;";
    titleEnglishTest.style = "background: #008274";
    imgCardEnglishTest.src = "../assets/icon/done.svg";
  }
});

CardPersonalInfo.addEventListener("click", function () {
  window.location.href = "../pages/details.html";
});
CardEnglishTest.addEventListener("click", function () {
  if (data.statusEnglishTest != "Done") {
    window.location.href = "../pages/englishtest.html";
  }
});
