import {
  addYear,
  addMonth,
  addUserName,
  addUserCardNumber,
  addCvcAndShowThanksGivingWindow,
} from "./functions.js";

const $btn = document.querySelector(".button");

$btn.addEventListener("click", () => {
  addUserName();

  addUserCardNumber();

  addMonth();
  addYear();

  addCvcAndShowThanksGivingWindow();
});
