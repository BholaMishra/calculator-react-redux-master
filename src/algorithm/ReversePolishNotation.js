const operation = (operator, operand1, operand2) => {
    switch (operator) {
        case '+':
            return operand2 + operand1;
        case '-':
            return operand2 - operand1;
        case '*':
            return operand2 * operand1;
        case '/':
            return operand2 / operand1;
    }
}

export default function getAnsByRPN(inputArr) {
    const stack = [];
    
    while (inputArr.length > 0) {
        if (typeof inputArr[0] === "number") {
            stack.push(inputArr.shift());
        } else {
            stack.push(operation(inputArr.shift(), stack.pop(), stack.pop()));
        }
    }
    return stack.length == 1 ? stack[0].toString(10) : "ERROR";
}