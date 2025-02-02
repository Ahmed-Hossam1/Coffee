let Nav = document.getElementById("nav");

// change backgroundColor of nav
window.onscroll = function scroll() {
  if (window.scrollY > 50) {
    Nav.classList.add("nav-scroll");
  } else {
    Nav.classList.remove("nav-scroll");
  }
};

// scroll to top of page
const btn_to_top = document.querySelector(".btn-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btn_to_top.style.display = "flex";
  } else {
    btn_to_top.style.display = "none";
  }
});

btn_to_top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Counter
const section = document.querySelector(".numbers");
const numbers = document.querySelectorAll(".number-box .number");
let started = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop - 400) {
    if (!started) {
      numbers.forEach((number) => {
        let goal = number.dataset.goal;
        let count = setInterval(() => {
          number.textContent++;
          if (number.textContent == goal) {
            clearInterval(count);
          }
        }, 10);
      });
    }
    started = true;
  }
});

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

console.log("from index");
const signout = document.getElementById("signout");

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
const Location = JSON.parse(localStorage.getItem("location"));

if (user_photo) {
  user_photo.src = user.profile_image;
}

if (user_name) {
  user_name.innerHTML = user.name;
}

if (user_email) {
  user_email.innerHTML = user.email;
}

const nav_country = document.getElementById("nav-country");
if (token) {
  nav_country.innerHTML = Location.countryCode;
}
