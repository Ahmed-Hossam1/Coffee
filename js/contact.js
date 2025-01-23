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

const MessageForm = document.getElementById("send_message");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Message = document.getElementById("message");
const NameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

//  Validation
const Regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

MessageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Client Validation
  if (Name.value.trim() === "") {
    NameError.textContent = "Please enter your Name";
  } else if (Name.value.length < 5) {
    NameError.textContent =
      "Please Enter a valid Name between 5 to 20 characters";
  } else {
    NameError.textContent = "";
  }

  if (Email.value.trim() === "" || !Regex.test(Email.value)) {
    emailError.textContent = "Please Enter a valid email";
  } else {
    emailError.textContent = "";
  }

  if (Message.value.trim() === "") {
    messageError.textContent = "Please enter your Message";
  } else {
    messageError.textContent = "";
  }

  if (
    Name.value.trim() == "" ||
    Email.value.trim() == "" ||
    Message.value.trim() == ""
  ) {
    return;
  }
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
