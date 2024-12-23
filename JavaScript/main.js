let Nav = document.getElementById("nav");

window.onscroll = function () {
  if (window.scrollY > 250) {
    Nav.classList.add("nav-scroll");
  } else {
    Nav.classList.remove("nav-scroll");
  }
};

const spinner = document.getElementById("spinner");

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     spinner.style.display = "none";
//   }, 1000);
// });
