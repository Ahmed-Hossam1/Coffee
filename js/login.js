const username = document.getElementById("username");
const password = document.getElementById("password");
const LoginForm = document.getElementById("Login");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const errors = document.getElementById("errors");
const loginbtn = document.getElementById("loginbtn");

let isLoading = false;

LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Client Validation
  if (username.value.trim() === "") {
    usernameError.textContent = "Please enter your username";
  } else {
    usernameError.textContent = "";
  }
  if (password.value.trim() === "") {
    passwordError.textContent = "Please enter your password";
  } else {
    passwordError.textContent = "";
  }
  if (username.value.trim() == "" || password.value.trim() == "") {
    return;
  }

  getLocation()
  //  Login Function
  Login();
});

const Login = async () => {
  try {
    isLoading = true;
    loginbtn.innerHTML = ` logging...`;
    loginbtn.disabled = true;
    loginbtn.style.cursor = "not-allowed";
    loginbtn.style.backgroundColor = "gray";

    const { data } = await axios.post(
      "https://tarmeezacademy.com/api/v1/login",
      {
        username: username.value,
        password: password.value,
      }
    );
    localStorage.setItem("token", data?.token);
    localStorage.setItem("user", JSON.stringify(data?.user));
    window.location.href = "index.html";
  } catch (error) {
    // server validation

    errors.textContent = error.response.data.message;
    console.log("error", error.response.data.message);
  } finally {
    isLoading = false;
    loginbtn.innerHTML = "login";
    loginbtn.disabled = false;
    loginbtn.style.cursor = "pointer";
    loginbtn.style.backgroundColor = "#1d4ed8";
  }
};

const getLocation = async () => {
  try {
    const { data } = await axios.get("http://ip-api.com/json");
    localStorage.setItem("location", JSON.stringify(data));
  } catch (error) {
    console.log("error", error);
  }
};
