// window.addEventListener("load", function () {
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = JSON.parse(localStorage.getItem(key));
//     if (value.status == "login") {
//       let email = value.email;
//       list = JSON.parse(localStorage.getItem(email));
//       console.log(list);
//     }
//     // console.log(key);
//     // console.log(value.status);
//   }
// });

function loading() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    if (value.status == "login") {
      let email = value.email;
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
  console.log("object");
  window.location.href = "../index.html";

  //   window.location.reload();
}

// class User {
//   constructor(email, password, status) {
//     this.email = email;
//     this.password = password;
//     this.status = status;
//   }
// }
// let dataUser;

// let list = JSON.parse(localStorage.getItem(email));
// if (list != null) {
//   dataUser = new User(list.email, list.password, list.status);
// }

// console.log( this.email);
