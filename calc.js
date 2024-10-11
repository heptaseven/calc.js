function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        return "Invalid operator";
    }

    return `Result: ${result}`;
}

console.log(calculator());
