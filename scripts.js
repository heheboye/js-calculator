//
const numberButtons = document.querySelectorAll('.numbers');
const previousValueDisplay = document.querySelector('.display1');
const currentValueDisplay = document.querySelector('.display2');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.operate');

//
let operation = undefined;
let currentValue = '';
let previousValue = '';

// 
function operate() {
  let result;
  let current = parseFloat(currentValue);
  let previous = parseFloat(previousValue);
  if (isNaN(current) || isNaN(previous)) return;
  switch (operation) {
    case '+':

    case '-':

    case '*':
      
    case '/':
  }
}

//
function getNumberPressed(number) {
  if (number === '.' && currentValue.includes('.')) return;
  if (number === '0' && currentValue.startsWith('0')) return;
  if (currentValue.startsWith('0') && number > '0') {
    currentValue = number;
  } else {
    currentValue += number;
  }
}

//
function setOperator(operator) {
  if (currentValue === '') {
    operation = operator
    return
  } else {
    operation = operator;
    previousValue = currentValue;
    currentValue = '';
 }
}

function updateScreen() {
  currentValueDisplay.innerText = currentValue;
  previousValueDisplay.innerText = previousValue;
}

//
Array.from(numberButtons).forEach((button) => {
  button.addEventListener('click', () => {
    getNumberPressed(button.innerText);
    updateScreen();
  });
});

Array.from(operatorButtons).forEach((button) => {
  button.addEventListener('click', () => {
    setOperator(button.innerText);
    updateScreen();
  });
});

equalsButton.addEventListener('click', button => {
  operate();
  updateScreen();
});