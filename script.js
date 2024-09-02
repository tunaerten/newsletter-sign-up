"use strict";

const emailForm = document.querySelector(".email-form");
const cardEl = document.querySelector(".card");
const emailEl = document.getElementById("email");
const errorText = document.querySelector(".error-text");

const success = () => {
  const successHTML = `
          <section>
            <div class="success-card">
              <div class="container">
                     <div class="img-container">
                <img
                  src="./assets/images/icon-success.svg"
                  alt="icon"
                  class="success-icon"
                />
                     </div>
                <div class="success-info">
                  <h1 class="success-header">Thanks for subscribing!</h1>
                  <p class="success-text">
                    A confirmation email has been sent to
                    <span class="user-email">${emailEl.value.toLowerCase()}</span>. Please open
                    it and click the button inside to confirm your subscription.
                  </p>
                </div>
                
                <div class="dismiss-container">
                <a class="dismiss-btn" href="index.html">Dismiss message</a>
              </div>
              </div>
            </div>
          </section>
        `;
  document.body.insertAdjacentHTML("beforeend", successHTML);
};

const error = () => {
  const errorHTML = `
    <span class="error-text">Valid email required</span>
    `;
  errorText.innerHTML = errorHTML;
  if (errorHTML) return;
};

const checkMail = () => {
  const email = document.getElementById("email").value.trim();
  const regx = /\S+@\S+\.\S+/;

  if (email.match(regx)) {
    cardEl.style.display = "none";
    success();
  }
  if (!email.match(regx)) {
    error();
    emailEl.style.border = "1px solid var(--clr-tomato)";
    emailEl.style.backgroundColor = "var(--clr-tomato-light)";
    emailEl.style.color = "var(--clr-tomato)";
  }
};

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkMail();
});

emailEl.addEventListener("input", (e) => {
  const errorElement = document.querySelector(".error-text");

  if (e.target.value === "") {
    errorElement.innerHTML = "";
    emailEl.style.border = "1px solid var(--clr-grey)";
    emailEl.style.backgroundColor = "var(--clr-white)";
    emailEl.style.color = "black";
  }
});
