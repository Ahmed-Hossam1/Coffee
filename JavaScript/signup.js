const Name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeat_password = document.getElementById("repeat-password");
const NameError = document.getElementById("nameError");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repeat_passwordError = document.getElementById("repeat-passwordError");
const file_input = document.getElementById("file_input");
const file_inputError = document.getElementById("file_inputError");
const signupForm = document.getElementById("signup");
const signUpBtn = document.getElementById("signupbtn");

let isLoading = false;

const Regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

signupForm.addEventListener("submit", (e) => {
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

  if (username.value.trim() === "") {
    usernameError.textContent = "Please enter your username";
  } else if (username.value.length < 5) {
    usernameError.textContent =
      "Please Enter a valid username between 5 to 20 characters";
  } else {
    usernameError.textContent = "";
  }

  if (email.value.trim() === "" || !Regex.test(email.value)) {
    emailError.textContent = "Please valid email";
  } else {
    emailError.textContent = "";
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Please enter your password";
  } else if (password.value.length < 6) {
    passwordError.textContent = "password cannot be less than 6 characters";
  } else if (password.value.length > 40) {
    passwordError.textContent = passwordError.textContent =
      "password cannot be more than 40 characters";
  } else {
    passwordError.textContent = "";
  }

  if (repeat_password.value.trim() === "") {
    repeat_passwordError.textContent = "Please repeat your password";
  } else {
    repeat_passwordError.textContent = "";
  }
  if (file_input.value.trim() === "") {
    file_inputError.textContent =
      "Please choose image file of type: png, jpeg, jpg.";
  } else {
    file_inputError.textContent = "";
  }

  if (
    Name.value.trim() == "" ||
    username.value.trim() == "" ||
    password.value.trim() == "" ||
    email.value.trim() == "" ||
    repeat_password.value.trim() == ""
  ) {
    return;
  }

  if (password.value !== repeat_password.value) {
    repeat_passwordError.textContent = "Password does not match";
  } else {
    repeat_passwordError.textContent = "";
  }

  //  signup Function
  Register();
  getLocation()
});

// signup Function
 const Register = async () => {
  isLoading = true;
  if (isLoading) {
    signUpBtn.disabled = true;
    signUpBtn.style.cursor = "not-allowed";
    signUpBtn.innerHTML = ` Registering...`;
    signUpBtn.style.backgroundColor = "gray";
  }

  const formData = new FormData(signupForm);
  formData.append("name", Name.value);
  formData.append("username", username.value);
  formData.append("email", email.value);
  formData.append("password", password.value);
  formData.append("image", file_input.files[0]);
  try {
    const { data } = await axios.post(
      "https://tarmeezacademy.com/api/v1/register",
      formData,
      {
        header: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    localStorage.setItem("token", data?.token);
    localStorage.setItem("user", JSON.stringify(data?.user));
    window.location = "index.html";
  } catch (error) {
    error.response.data.errors?.username?.map(
      (err) => (usernameError.textContent = err)
    );
    error.response.data.errors?.email?.map(
      (err) => (emailError.textContent = err)
    );
    console.log("error", error.response);
  } finally {
    isLoading = false;
    signUpBtn.disabled = false;
    signUpBtn.style.cursor = "pointer";
    signUpBtn.innerHTML = ` Register new account`;
    signUpBtn.style.backgroundColor = "#1d4ed8";
  }
};

// get location
 getLocation = async () => {
  try {
    const { data } = await axios.get("http://ip-api.com/json");
    localStorage.setItem("location", JSON.stringify(data));
  } catch (error) {
    console.log("error", error);
  }
};
