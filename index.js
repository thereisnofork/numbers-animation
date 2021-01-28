const numbers = document.querySelectorAll("#numbers span");
const numberContainer = document.querySelector("#numbers-container");
const lowerContainer = document.querySelector("#lower-container");
const tryBtn = document.querySelector("#try");

const lastNumber = numbers.length - 1;

tryBtn.addEventListener("click", () => {
  numbers.forEach((span, idx) => {
    span.classList = "";
    if (idx === 0) {
      span.classList.add("in");
    }
  });

  numberContainer.classList.remove("hide");
  lowerContainer.classList.add("hideL");
  lowerContainer.classList.remove("showL");
});

numbers.forEach((span, idx) => {
  span.addEventListener("animationend", (e) => {
    if (e.animationName === "in" && idx !== lastNumber) {
      span.classList.remove("in");
      span.classList.add("out");
      span.nextElementSibling.classList.add("in");
    }

    if (e.animationName === "in" && idx === lastNumber) {
      numberContainer.classList.add("hide");
      lowerContainer.classList.remove("hideL");
      lowerContainer.classList.add("showL");
    }
  });
});
