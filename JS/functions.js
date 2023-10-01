export function addUserName() {
  const $cardHolderName = document.querySelector(".cardholder-name");
  const $userName = $cardHolderName.querySelector("input").value;

  if ($userName) {
    const $ownerCard = document.querySelector(".owner-card");
    $ownerCard.textContent = $userName;
  } else {
    addErrorClassAndMessage($cardHolderName);
  }
}

export function addUserCardNumber() {
  const $cardNumber = document.querySelector(".card-number");
  const $userCardNumber = $cardNumber.querySelector("input").value;
  const regExp = /([0-9]{4}\s){3}[0-9]{4}/g;

  if (regExp.test($userCardNumber)) {
    const $numberCard = document.querySelector(".number-card");
    $numberCard.textContent = $userCardNumber;
  } else if ($userCardNumber === "") {
    addErrorClassAndMessage($cardNumber);
  } else {
    addErrorClassAndMessage($cardNumber);
  }
}

export function addMonth() {
  const $expDate = document.querySelector(".exp-date");
  const month = $expDate.querySelector("#month").value;
  const regExp2 = /[0-9]{2}/g;

  if (regExp2.test(month)) {
    const $m = document.querySelector("#m");
    $m.textContent = month;
  } else {
    addErrorClassAndMessage($expDate);
  }
}

export function addYear() {
  const $expDate = document.querySelector(".exp-date");
  const $year = $expDate.querySelector("#year").value;

  if ($year) {
    const y = document.querySelector("#y");
    y.textContent = $year;
  } else {
    addErrorClassAndMessage($expDate);
  }
}

export function addCvcAndShowThanksGivingWindow() {
  const $cvc = document.querySelector(".cvc");
  const $userCvc = $cvc.querySelector("input").value;

  if ($userCvc) {
    const $cardCvc = document.querySelector(".card-cvc");
    $cardCvc.textContent = $userCvc;

    const $form = document.querySelector(".form");
    $form.classList.add("none");

    const $complete = document.querySelector(".complete");
    $complete.classList.add("show");
  } else {
    addErrorClassAndMessage($cvc);
  }
}

function addErrorClassAndMessage(DOMelement) {
  const $input = DOMelement.querySelector("input");
  $input.classList.add("error-input");

  if (!DOMelement.querySelector("p")) {
    DOMelement.insertAdjacentHTML(
      "beforeend",
      `<p class="error-text">Can't be blank</p>`
    );
  }
}
