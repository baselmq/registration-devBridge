/* ------------- scroll reveal -------------*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".hompage-title, .section-header", { origin: "top" });

ScrollReveal().reveal(
  ".hompage-text, .homepage-buttons, .home-and-about-img, .about-text, .about-button, .courses-button, .contact-form",
  {
    origin: "bottom",
  }
);

const btnSignIn = document.getElementById("sign__in");
const btnSignUp = document.getElementById("sign__up");
const btnSignOut = document.getElementById("sign__out");
const btnJoinNow = document.getElementById("join__now");
const dropdownHome = document.getElementById("dropdown__home");
window.localStorage;
let data = {};
window.addEventListener("load", function () {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    if (value.status == "login") {
      data = value;
      btnSignIn.style.display = "none";
      btnSignUp.style.display = "none";
      dropdownHome.classList.remove("d-none");
    }
  }
});

btnSignOut.addEventListener("click", function () {
  let list = JSON.parse(localStorage.getItem(data.email));
  let currentObj = { ...list };
  currentObj.status = "logout";
  localStorage.setItem(data.email, JSON.stringify(currentObj));
  // console.log(list.status);
  // localStorage.setItem(email, JSON.stringify(list));
  window.location.reload();
  btnSignIn.style.display = "block";
  btnSignUp.style.display = "block";
  dropdownHome.classList.add("d-none");
});

btnJoinNow.addEventListener("click", function () {
  if (CheckStatus() == "login") {
    btnJoinNow.setAttribute("href", "pages/register.html");
  } else if (CheckStatus() == "submitted") {
    btnJoinNow.setAttribute("href", "pages/report.html");
  } else {
    let listData = JSON.parse(localStorage.getItem(data.email));
    listData["joinNow"] = "joined";
    localStorage.setItem(data.email, JSON.stringify(listData));
    btnJoinNow.setAttribute("href", "pages/registration_page.html");
  }
});

function CheckStatus() {
  let list = JSON.parse(localStorage.getItem(data.email));
  if (list == null) {
    return "login";
  } else if (list.submit == "submitted") {
    return "submitted";
  } else {
    return "registration";
  }
}
