const username = document.getElementById("username");
const user_photo = document.getElementById("user-photo");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const country = document.getElementById("country");
const city = document.getElementById("city");
const timezone = document.getElementById("timezone");
const postal_code = document.getElementById("postal-code");

// get local storage
const user = JSON.parse(localStorage.getItem("user"));
const Location = JSON.parse(localStorage.getItem("location"));

if (user.username) {
  username.value = user.username;
}

if (user.profile_image) {
  user_photo.src = user.profile_image;
}

if (user.name) {
  Name.value = user.name;
}

if (user.email) {
  email.value = user.email;
}

if (Location.country) {
  country.value = Location.country;
}

if (Location.city) {
  city.value = Location.city;
}

if (Location.timezone) {
  timezone.value = Location.timezone;
}

if (Location.zip) {
  postal_code.value = Location.zip;
}
