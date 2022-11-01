//
const numberButtons = document.querySelectorAll('.numbers');
const previousValueDisplay = document.querySelector('.display1');
const currentValueDisplay = document.querySelector('.display2');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.operate');
const deleteLast = document.querySelector('.delete');
const clearAll = document.querySelector('.clear');

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
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      break;
  }
  currentValue = result;
  operation = undefined;
  previousValue = '';
}

//
function getNumberPressed(number) {
  if (number == '.' && currentValue.includes('.')) return;
  if (currentValue == '0' && number != '.') {
    currentValue = number;
    return;
  };
  currentValue += number;
}

//
function setOperator(operator) {
  if (currentValue === '') {
    operation = operator
    return
  }
  if (previousValue !== '') {
    operate();
  } 
  operation = operator;
  previousValue = currentValue;
  currentValue = '';
}

function updateScreen() {
  currentValueDisplay.innerText = currentValue;
  if (operation != null) {
    previousValueDisplay.innerText = `${previousValue} ${operation}`;
  }
}

function allClear() {
  operation = undefined;
  currentValue = '';
  previousValue = '';
  currentValueDisplay.innerText = '';
  previousValueDisplay.innerText = '';
};

function removeLast() {
  currentValue = currentValue.toString().slice(0, -1);
}

//
deleteLast.addEventListener('click', button => {
  removeLast();
  updateScreen();
});

clearAll.addEventListener('click', button => {
  allClear()
  updateScreen();
});

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