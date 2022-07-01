const form = document.getElementById("form");
const password1El = document.getElementById("password");
const password2El = document.getElementById("cpassword");
const messageContainer = document.getElementById("message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  if (!isValid) {
    //   Style main message for an error
    messageContainer.removeAttribute("hidden");
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "#f37e71";
    messageContainer.style.backgroundColor = "#f3d0cc";
    return;
  }
  //   Check to see if passwords match
  if (password1El.value === password2El.value) {
    // Success - green
    passwordsMatch = true;
    password1El.style.borderColor = "#30f0c0";
    password2El.style.borderColor = "#30f0c0";
  } else {
    // Fail - red
    messageContainer.removeAttribute("hidden");
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "#f37e71";
    password1El.style.borderColor = "#f37e71";
    password2El.style.borderColor = "#f37e71";
    messageContainer.style.backgroundColor = "#f3d0cc"; //light background red
    return;
  }

  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    messageContainer.removeAttribute("hidden");
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "#30f0c0";
    messageContainer.style.backgroundColor = "#cef8ee";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    mobile: form.mobile.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener("keydown", () => {
  message.textContent = "";
});
form.addEventListener("submit", processFormData);
