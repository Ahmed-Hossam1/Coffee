const username = document.getElementById("username");
const password = document.getElementById("password");
const LoginForm = document.getElementById("Login");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Client Validation
  if (username.value.trim() === "") {
    usernameError.textContent = "Please enter your username";
    usernameError.style.color = "red";
  } else {
    usernameError.textContent = "";
  }
  if (password.value.trim() === "") {
    passwordError.textContent = "Please enter your password";
    passwordError.style.color = "red";
  } else {
    passwordError.textContent = "";
  }
  if (username.value.trim() == "" || password.value.trim() == "") {
    return;
  }

  Login();
});

const Login = async () => {
  try {
    const { data } = await axios.post(
      "https://tarmeezacademy.com/api/v1/login",
      {
        username: username.value,
        password: password.value,
      }
    );

    console.log(data);
  } catch (error) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    console.log("error", error.response.data.message);
  }
};
