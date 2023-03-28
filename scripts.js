const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals")
const operation = document.querySelector(".operation");

let firstNumber;
let sign;
let clearOnNext = false;

function clearZero() {
    if(operation.textContent === '0') {
        operation.textContent = '';
    }
}

function resetDisplay() {
    operation.textContent = '';
}

clear.addEventListener('click', () => {
    operation.textContent = '0';
    firstNumber = 0;
})

numbers.forEach((number) => {
        number.addEventListener('click', (e) => {
            clearZero();
            if(clearOnNext) {
                clearOnNext = false;
                operation.textContent = "";
            }
            operation.textContent += e.target.textContent;
        })
    })

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if(firstNumber == null || firstNumber === 0) {
            firstNumber = operation.textContent;
        }

        operation.textContent = '';
        sign = operator.textContent;
        clearOnNext = false;
    });
});

equals.addEventListener('click', () => {
        const secondNumber = operation.textContent;
        let action = operate(sign, Number(firstNumber), Number(secondNumber))
        operation.textContent = action;
        clearOnNext = true;

        if(action !== "Dumbass!") {
            firstNumber = action;
            operation.textContent = Number(Math.round(operation.textContent * 1000) / 1000);
        }
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
        return "Dumbass!"
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