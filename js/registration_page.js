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

const btnSubmit = document.querySelector(".btn__submit");

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
  if (data.statusTechnicalTest == "Done") {
    CardTechnicalTest.style = "border-color: #008274;   cursor: initial;";
    contentTechnicalTest.style = " background: #008274 ;color: #fff;";
    titleTechnicalTest.style = "background: #008274";
    imgCardTechnicalTest.src = "../assets/icon/done.svg";
  }

  if (
    data.statusPersonalInformation == "Done" &&
    data.statusEnglishTest == "Done" &&
    data.statusTechnicalTest == "Done"
  ) {
    btnSubmit.classList.remove("disabled-button");
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
CardTechnicalTest.addEventListener("click", function () {
  if (data.statusTechnicalTest != "Done") {
    window.location.href = "../pages/technival-test.html";
  }
});

btnSubmit.addEventListener("click", function () {
  // Create a new Date object
  var currentDate = new Date();
  // Get the individual components of the date
  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, "0");
  var day = String(currentDate.getDate()).padStart(2, "0");
  // Create the formatted date string
  var formattedDate = day + "/" + month + "/" + year;

  let newData = { ...dataUser, submit: "submitted", date: formattedDate };
  localStorage.setItem(dataUser.email, JSON.stringify(newData));
  window.location.href = "../pages/report.html";
});
