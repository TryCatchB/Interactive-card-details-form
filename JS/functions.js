function updateElementText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function addErrorClassAndMessage(DOMelement, message = "Can't be blank") {
  const $input = DOMelement.querySelector("input");
  $input.classList.add("error-input");

  // Avoid duplicate error messages
  if (!DOMelement.querySelector(".error-text")) {
    DOMelement.insertAdjacentHTML(
      "beforeend",
      `<p class="error-text">${message}</p>`
    );
  }
}

function getInputValue(selector) {
  const inputElement = document.querySelector(selector);
  return inputElement ? inputElement.value.trim() : "";
}

export function addUserName() {
  const userName = getInputValue(".cardholder-name input");

  const data = {
    value: userName,
    condition: userName,
    targetSelector: ".owner-card",
    errorSelector: ".cardholder-name",
  };

  validateAndUpdate(data);
}

export function addUserCardNumber() {
  const cardNumber = getInputValue(".card-number input");
  const regExp = /^([0-9]{4}\s){3}[0-9]{4}$/;

  const data = {
    value: cardNumber,
    condition: regExp.test(cardNumber),
    targetSelector: ".number-card",
    errorSelector: ".card-number",
  };

  validateAndUpdate(data);
}

export function addMonth() {
  const month = getInputValue("#month");
  const regExp = /^[0-9]{2}$/;

  const data = {
    value: month,
    condition: regExp.test(month),
    targetSelector: "#m",
    errorSelector: ".exp-date",
  };

  validateAndUpdate(data);
}

export function addYear() {
  const year = getInputValue("#year");

  const data = {
    value: year,
    condition: year,
    targetSelector: "#y",
    errorSelector: ".exp-date",
  };

  validateAndUpdate(data);
}

export function addCvcAndShowThanksGivingWindow() {
  const cvc = getInputValue(".cvc input");

  if (cvc) {
    updateElementText(".card-cvc", cvc);

    // Hide form and show "Thanks" message
    document.querySelector(".form").classList.add("none");
    document.querySelector(".complete").classList.add("show");
  } else {
    addErrorClassAndMessage(document.querySelector(".cvc"));
  }
}

function validateAndUpdate(data) {
  const { value, condition, targetSelector, errorSelector } = data;

  condition
    ? updateElementText(targetSelector, value)
    : addErrorClassAndMessage(document.querySelector(errorSelector));
}
