import {
  addYear,
  addMonth,
  addUserName,
  addUserCardNumber,
  addCvcAndShowThanksGivingWindow,
} from "./functions.js";

document.querySelector(".button").addEventListener("click", (event) => {
  event.preventDefault();

  // Run all field validation and value setting
  addUserName();
  addUserCardNumber();
  addMonth();
  addYear();
  addCvcAndShowThanksGivingWindow();
});
