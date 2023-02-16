const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals")

function addNumberToDisplay() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            resetDisplay();
            display.textContent += number.textContent;
        })
    })
}

function resetDisplay() {
    if(display.textContent === '0') {
        display.textContent = '';
    }
}

clear.addEventListener('click', () => {
    display.textContent = 0;
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        display.textContent += ` ${operator.textContent} `;
    })
})

equals.addEventListener('click', () => {
    let arr = (display.textContent.split(" "))
    display.textContent = operate(arr[1], Number(arr[0]), Number(arr[2]));
    console.log(display.textContent);
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