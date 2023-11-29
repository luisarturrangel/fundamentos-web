import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber,
} from "./creditcard.js";

class Form {
  validation() {
    const form = document.querySelector(".credit-form");
    const number = form.elements["credit-card-number"];

    form.addEventListener("submit", () => {
      let creditNumber = isValid(number.value);
      if (creditNumber) {
        alert("valido");
      } else {
        alert("erro");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = new Form();
  form.validation();
});
