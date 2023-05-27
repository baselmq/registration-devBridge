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
window.localStorage;
let email = "";
window.addEventListener("load", function () {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    if (value.status == "login") {
      email = value.email;
      btnSignIn.style.display = "none";
      btnSignUp.style.display = "none";
      btnSignOut.classList.remove("d-none");
    }
    // console.log(key);
    // console.log(value.status);
  }
});

btnSignOut.addEventListener("click", function () {
  let list = JSON.parse(localStorage.getItem(email));
  let currentObj = { ...list };
  currentObj.status = "logout";
  localStorage.setItem(email, JSON.stringify(currentObj));
  // console.log(list.status);
  // localStorage.setItem(email, JSON.stringify(list));
  window.location.reload();
  btnSignIn.style.display = "block";
  btnSignUp.style.display = "block";
  btnSignOut.classList.add("d-none");
});

btnJoinNow.addEventListener("click", function () {
  if (CheckStatus() == "login") {
    btnJoinNow.setAttribute("href", "pages/login.html");
  } else {
    btnJoinNow.setAttribute("href", "pages/registration_page.html");
  }
});

function CheckStatus() {
  let list = JSON.parse(localStorage.getItem(email));
  if (list == null) {
    return "login";
  } else {
    return "registration";
  }
}
