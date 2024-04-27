function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let a;
let b;
let operator;

function operate(a, operator, b) {
  if (operator == '+') {
    return add(a, b);
  } else if (operator == '-') {
    return subtract(a, b);
  } else if (operator == '*') {
    return multiply(a, b);
  } else if (operator == '/') {
    return divide(a, b);
  }
}

const display = document.querySelector('input[type="number"]');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const displayValue = button.innerHTML;
    display.value = displayValue;
  });
});

// 6.
