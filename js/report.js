const fullName = document.getElementById("full__name");
const englishMark = document.getElementById("english__mark");
const technicalMark = document.getElementById("technical__mark");
const submitDate = document.getElementById("submit__date");

if (dataUser != undefined) {
  const english = parseInt(dataUser.englishTest.englishTestScore);
  const technical = parseInt(dataUser.technicalTest.technicalTestScore);

  function calc(number, mark) {
    let avg = (mark * 100) / number;
    return Math.round(avg);
  }

  fullName.textContent = dataUser.fullName;
  englishMark.textContent = `${calc(15, english)}%`;
  technicalMark.textContent = `${calc(10, technical)}%`;
  submitDate.textContent = dataUser.date;
} else {
  window.location.href = "../pages/login.html";
}

let img = document.getElementById("image__user");

function fetchImage() {
  if (dataUser.image == undefined) {
    img.src = "../assets/icon/user.svg";
  } else {
    img.src = dataUser.image;
  }
}
fetchImage();
