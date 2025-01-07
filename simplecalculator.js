function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero";
    } else {
        return x / y;
    }
}
const operand1 = parseFloat(prompt("Enter the first number: "));
const operand2 = parseFloat(prompt("Enter the second number: "));
const operation = prompt("Enter the operation (+, -, *, /): ");
let result;
switch (operation) {
    case '+':
        result = add(operand1, operand2);
        break;
    case '-':
        result = subtract(operand1, operand2);
        break;
    case '*':
        result = multiply(operand1, operand2);
        break;
    case '/':
        result = divide(operand1, operand2);
        break;
    default:
        result = "Invalid operation";
}
alert("Result: " + result);