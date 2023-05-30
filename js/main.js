let userEmail = document.getElementById("name__user");
function loading() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    if (value.status == "login") {
      let email = value.email;
      userEmail.textContent = email;
      return JSON.parse(localStorage.getItem(email));
    }
    // console.log(key);
    // console.log(value.status);
  }
}
let dataUser = loading();

function signOut() {
  let list = JSON.parse(localStorage.getItem(dataUser.email));
  let currentObj = { ...list };
  currentObj.status = "logout";
  localStorage.setItem(dataUser.email, JSON.stringify(currentObj));
  window.location.href = "../index.html";

  //   window.location.reload();
}
