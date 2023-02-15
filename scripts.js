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
            console.log(`Addition ${add(num1, num2)}`);
            break;
        case '-':
            console.log(`Subtraction ${subtract(num1, num2)}`);
            break;
        case '*':
            console.log(`Multiplication ${multiply(num1, num2)}`);
            break;
        case '/':
            console.log(`Division ${divide(num1, num2)}`);
            break;
        default:
            console.log(`Sorry, someting went wrong!`);
    }
}