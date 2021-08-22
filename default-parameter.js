// Function default parameter for not provided value
function add(num1, num2) {
    // option one
    if (num2 == undefined) {
        num2 = 0;
    }
    // option 2 
    num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}

const result = add(10);
console.log(result)

// es6  Function default parameter for not provided value

function divide(num1, num2 = 0) {
    const total = num1 + num2;
    return total;
}
const result = divide(10);
console.log(result);