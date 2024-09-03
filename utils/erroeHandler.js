import {} from "./constants";
import { showToast } from "./toast";
import { deleteUSerToken } from "./userManager";

export const errorHandler = (error) => {
  const message = error.response?.data?.message;
  if (typeof message === "string") {
    showToast(message, "FAILURE");
  } else if (Array.isArray(message)) {
    for (let messageText of message) {
      showToast(messageText, "FAILURE");
    }
  }
};
