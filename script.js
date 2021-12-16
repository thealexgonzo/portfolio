"use strict";

const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

// const animate = function (name) {
//   name.addEventListener("click", function () {
//     document.querySelector(`.${"name"}__animation`).style.animationPlayState =
//       "running";
//   });
// };

// animate(email);

// email.addEventListener("click", function () {
//   document.querySelector(".email__animation").style.animationPlayState =
//     "running";
// });

phone.addEventListener("click", function () {
  document.querySelector(".phone__animation").style.animationPlayState =
    "running";
});

email.addEventListener("click", first);

function first(e) {
  document.querySelector(".email__animation").style.animationPlayState =
    "running";

  e.stopImmediatePropagation();
  this.removeEventListener("click", first);
  document.onclick = second;
}


// Not working as expected, text still appears after second animation run. 
function second() {
  document.querySelector(".email__animation").style.cssText =
    "animation: remove-typing 3.5s steps(40, end), remove-caret 0.75s step-end infinite;";
}

// 1. Make the text appear on first click.
// 2. Make the text dissapear on second click.
// 3. How to handle more than 2 clicks 
