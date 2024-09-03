import "./style.css";
import "toastify-js/src/toastify.css";
import { getUserToken } from "./utils/userManager";
import { navigateTo } from "./utils/navigation";

setTimeout(changePath, 1500);

function changePath() {
  const token = getUserToken();
  if (token) {
    navigateTo("homePage");
  } else {
    navigateTo("onBoarding");
  }
}
