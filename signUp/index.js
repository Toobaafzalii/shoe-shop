import "../style.css";
import { showToast } from "../utils/toast";
import { signUpApi } from "../api/services";
import { errorHandler } from "../utils/erroeHandler";
import { setUserToken } from "../utils/userManager";
import {} from "../utils/constants";

const backIcon = document.getElementById("back-icon");
const eyeIcon = document.getElementById("eye-icon");
const userInput = document.getElementById("username-input");
const passInput = document.getElementById("password-input");
const signUpBtn = document.getElementById("signup-btn");
const signUpForm = document.getElementById("signup-form");

backIcon.addEventListener("click", () => {
  history.back();
});

eyeIcon.addEventListener("click", () => {
  if (passInput.type == "text") passInput.type = "password";
  else passInput.type = "text";
});

userInput.addEventListener("input", () => onInputChange());
passInput.addEventListener("input", () => onInputChange());

function onInputChange() {
  console.log(userInput.value, passInput.value);
  if (
    userInput.value !== "" &&
    passInput.value !== "" &&
    passInput.value.length >= 8
  ) {
    signUpBtn.disabled = false;
    signUpBtn.classList.remove("bg-opacity-65");
  } else {
    signUpBtn.disabled = true;
    signUpBtn.classList.add("bg-opacity-65");
  }
}

signUpForm.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    let username = userInput.value;
    let password = passInput.value;
    let response = await signUpApi({
      username,
      password,
    });
    setUserToken(response.data.token);
    showToast("signed up");
    setTimeout(() => {
      navigateTo("homePage");
    }, 1000);
  } catch (error) {}
});
