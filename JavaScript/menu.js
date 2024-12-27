import scroll from "./main.js";
scroll();
const loginbtn = document.getElementById("loginbtn");
const user_menu_button = document.getElementById("user-menu-button");

if (localStorage.getItem("token")) {
  loginbtn.style.display = "none";
  user_menu_button.style.display = "block";
} else {
  loginbtn.style.display = "block";
  user_menu_button.style.display = "none";
}

const signout = document.getElementById("signout");

// signout
signout.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location = "home.html";
});
