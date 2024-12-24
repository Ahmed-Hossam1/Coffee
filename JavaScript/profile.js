const username = document.getElementById("username");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const user_photo = document.getElementById("user-photo");
const cover_photo = document.getElementById("cover-photo");
const cover_photo_content = document.getElementById("cover-photo-content");
const country = document.getElementById("country");
const city = document.getElementById("city");
const timezone = document.getElementById("timezone");
const postal_code = document.getElementById("postal-code");


const user = JSON.parse(localStorage.getItem("user"));

username.value = user.username;
user_photo.src = user.profile_image;

if (user.profile_image) {
  cover_photo_content.style.display = "none";
  cover_photo.src = user.profile_image;
}

if (user.name) {
  Name.value = user.name;
}

if (user.email) {
  email.value = user.email;
}

const Location = JSON.parse(localStorage.getItem("location"));

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
  postal_code.value = location.zip;
}

