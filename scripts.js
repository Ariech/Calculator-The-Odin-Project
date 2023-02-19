const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals")
const operation = document.querySelector(".operation");

let firstNumber;
let sign;
let operatorAdded = 0;

function addNumberToDisplay() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            clearZero();

            operation.textContent += number.textContent;
        })
    })
}

function clearZero() {
    if(operation.textContent === '0') {
        operation.textContent = '';
    }
}

function resetDisplay() {
    operation.textContent = '';
    result.textContent = '';
}

clear.addEventListener('click', () => {
    operation.textContent = '0';
    operatorAdded = 0;
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        firstNumber = operation.textContent;
         operation.textContent = '';
        if(!operatorAdded && operation.textContent !== '0') {
            sign = `${operator.textContent}`
            operatorAdded = 1;
        }
       
        return firstNumber;
})
});

equals.addEventListener('click', () => {
        const secondNumber = operation.textContent;
        operation.textContent = operate(sign, Number(firstNumber), Number(secondNumber));

        operation.textContent = Number(Math.round(operation.textContent * 100) / 100);
        operatorAdded = 0;
})







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
    if(num2 === 0) {
        return "You can't divide by 0!"
    }

    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return (`${add(num1, num2)}`);
            break;
        case '-':
            return (`${subtract(num1, num2)}`);
            break;
        case '*':
            return(`${multiply(num1, num2)}`);
            break;
        case '/':
            return(`${divide(num1, num2)}`);
            break;
        default:
            console.log(`Sorry, someting went wrong!`);
    }
}

addNumberToDisplay();