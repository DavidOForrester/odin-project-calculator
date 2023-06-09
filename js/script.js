// Variables
let operator = "";
let displayValue = "";
let currentResult = "";
let inputFunction = "";

const resultDiv = document.getElementById("result");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelectorAll(".equal");
const clearAllButton = document.querySelectorAll(".clear-all");
const clearButton = document.querySelectorAll(".clear");

// Sets the display to 0
updateDisplay(currentResult);

// Starts the check for button clicks
numberButtonClicks();
operatorButtonClicks();
equalButtonClick();
clearAll()
clear()

// Functions
function clear() {
    clearButton.forEach((button) => {
      button.addEventListener("click", () => {
        displayValue = "";
        updateDisplay(displayValue);
      });
    });
  }

function clearAll() {
  clearAllButton.forEach((button) => {
    button.addEventListener("click", () => {
      operator = "";
      displayValue = "";
      currentResult = "";
      updateDisplay(displayValue);
    });
  });
}

function numberButtonClicks() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      displayValue += button.textContent;
      updateDisplay(displayValue);
    });
  });
}

function operatorButtonClicks() {
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      operator = button.textContent;
      if (currentResult != "") {
        currentResult = operate(operator, currentResult, displayValue);
      } else {
        currentResult = displayValue;
      }
      displayValue = "";
      updateDisplay(displayValue);
    });
  });
}

function equalButtonClick() {
  equalButton.forEach((button) => {
    button.addEventListener("click", () => {
      currentResult = operate(operator, currentResult, displayValue);
      updateDisplay(currentResult);
    });
  });
}

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
  number1 = Number(num1);
  number2 = Number(num2);

  if (operator == "+") {
    return add(number1, number2);
  } else if (operator == "-") {
    return subtract(number1, number2);
  } else if (operator == "x") {
    return multiply(number1, number2);
  } else if (operator == "/") {
    return divide(number1, number2);
  }
}

function updateDisplay(update) {
  resultDiv.textContent = update;
}
