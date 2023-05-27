// Create the alert element
let alertElement = document.createElement("div");
alertElement.className = "alert";
alertElement.textContent = "Please log in or sign up to join our Bootcamp!";

// Style the alert element
alertElement.style.backgroundColor = "#f8d7da";
alertElement.style.color = "#721c24";
alertElement.style.padding = "10px";
alertElement.style.border = "1px solid #f5c6cb";
alertElement.style.borderRadius = "4px";
alertElement.style.position = "fixed";
alertElement.style.top = "0";
alertElement.style.left = "0";
alertElement.style.width = "100%";
alertElement.style.textAlign = "center";

// Append the alert element to the document body
document.body.appendChild(alertElement);
