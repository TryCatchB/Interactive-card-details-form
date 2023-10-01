import {
  addYear,
  addMonth,
  addUserName,
  addUserCardNumber,
  addCvcAndShowThanksGivingWindow,
} from "./functions.js";

const $btn = document.querySelector(".button");

$btn.addEventListener("click", (event) => {
  event.preventDefault();

  addUserName();

  addUserCardNumber();

  addMonth();
  addYear();

  addCvcAndShowThanksGivingWindow();
});
