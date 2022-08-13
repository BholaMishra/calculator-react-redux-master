const opPriority = operator => {
    switch (operator) {
        case '*':
        case '/':
            return 2;
        case '+':
        case '-':
            return 1;
    }
    return 0;
}

export default function ShuntingYard(inputArr) {

    const outputArr = [];
    const stack = [];

    while (inputArr.length > 0) {
        if (typeof inputArr[0] === "number") {
            outputArr.push(inputArr.shift());
        } else if (inputArr[0] === '(') {
            stack.unshift(inputArr.shift());
        } else if (inputArr[0] === ')') {
            while (stack[0] !== '(') {
                outputArr.push(stack.shift());
            }
            stack.shift();
            inputArr.shift();
        } else {
            while (stack.length > 0 && opPriority(inputArr[0]) <= opPriority(stack[0])) {
                outputArr.push(stack.shift());
            }
            stack.unshift(inputArr.shift());
        }
    }
    return outputArr.concat(stack);
}