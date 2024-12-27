let Nav = document.getElementById("nav");

// change backgroundColor of nav
window.onscroll = function scroll() {
  if (window.scrollY > 50) {
    Nav.classList.add("nav-scroll");
  } else {
    Nav.classList.remove("nav-scroll");
  }
};

// change between login and logout
const loginbtn = document.getElementById("loginbtn");
const user_menu_button = document.getElementById("user-menu-button");
const token = localStorage.getItem("token");

if (token) {
  loginbtn.style.display = "none";
  user_menu_button.style.display = "block";
} else {
  loginbtn.style.display = "block";
  user_menu_button.style.display = "none";
}

// signout
signout.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location = "index.html";
});

// user profile
const user_photo = document.getElementById("user-photo");
const user_name = document.getElementById("user-name");
const user_email = document.getElementById("user-email");

const user = JSON.parse(localStorage.getItem("user"));

if (user_photo) {
  user_photo.src = user.profile_image;
}

if (user_name) {
  user_name.innerHTML = user.name;
}

if (user_email) {
  user_email.innerHTML = user.email;
}
