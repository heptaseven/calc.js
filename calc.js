const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    readline.question('Enter the first number: ', (firstNum) => {
        const num1 = parseFloat(firstNum);

        readline.question('Enter operator (+, -, *, /): ', (operator) => {
            readline.question('Enter the second number: ', (secondNum) => {
                const num2 = parseFloat(secondNum);

                let result;
                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        if (num2 === 0) {
                            console.log("Error: Division by zero is not allowed.");
                            readline.close();
                            return;
                        }
                        result = num1 / num2;
                        break;
                    default:
                        console.log('Invalid operator');
                        readline.close();
                        return;
                }

                console.log(`Result: ${result}`);
                readline.close();
            });
        });
    });
}

calculator();
