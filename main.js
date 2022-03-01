const form = document.querySelector(".sign-up-form");
let formInputs = document.querySelectorAll("input");

// Regex used in type=”email” from W3C
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

for (let i = 0; i < formInputs.length - 1; i++) {
  formInputs[i].addEventListener("focus", (e) => {
    e.target.parentElement.classList.add("input-focus");
  });

  formInputs[i].addEventListener("focusout", (e) => {
    e.target.parentElement.classList.remove("input-focus");
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 0; i < formInputs.length - 1; i++) {
    formInputs[i].parentElement.classList.remove("input-error");
    if (formInputs[i].getAttribute("name") === "email") {
      formInputs[i].parentElement.classList.remove("email-error");

      if (!emailRegEx.test(formInputs[i].value)) {
        formInputs[i].parentElement.classList.add("input-error", "email-error");
      }
    } else if (formInputs[i].getAttribute("name") === "firstName") {
      formInputs[i].parentElement.classList.remove("firstName-error");

      if (formInputs[i].value.trim().length === 0) {
        formInputs[i].parentElement.classList.add(
          "input-error",
          "firstName-error"
        );
      }
    } else if (formInputs[i].getAttribute("name") === "lastName") {
      formInputs[i].parentElement.classList.remove("lastName-error");

      if (formInputs[i].value.trim().length === 0) {
        formInputs[i].parentElement.classList.add(
          "input-error",
          "lastName-error"
        );
      }
    } else if (formInputs[i].getAttribute("name") === "password") {
      formInputs[i].parentElement.classList.remove("password-error");

      if (formInputs[i].value.trim().length === 0) {
        formInputs[i].parentElement.classList.add(
          "input-error",
          "password-error"
        );
      }
    }
  }
});
