function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "x") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

function updateDisplay(update) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = update;
}

let operator = "";
let num1 = 0;
let num2 = 0;
let inputNumber = null;
let inputFunction = "";

// TODO: need to work out how to get the number back out of this function
const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputNumber = button.textContent;
    updateDisplay(inputNumber);
  });
});

console.log(inputNumber);

const functionButtons = document.querySelectorAll(".function-button");

functionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputFunction = button.textContent;
    console.log(inputFunction);
  });
});
