"use strict";

const sectionRating = document.querySelector("#section-rating");
const sectionThankyou = document.querySelector("#section-thankyou");
const rating = document.querySelectorAll(".rating-number");
const btnSubmit = document.querySelector("#btn-submit");
const score = document.querySelector("#score");

let rate;

function openThankyou() {
  score.innerHTML = rate;
  sectionRating.classList.add("hidden");
  sectionThankyou.classList.remove("hidden");
}

function closeThankyou() {
  rate = undefined;
  sectionRating.classList.remove("hidden");
  sectionThankyou.classList.add("hidden");
}

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", () => {
    rate = rating[i].innerHTML;
  });
}

btnSubmit.addEventListener("click", () => {
  if (rate) {
    openThankyou();
  }
});
