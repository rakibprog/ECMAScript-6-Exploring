// arrow function 
const add = (num1, num2) => num1 + num2;
const total = add(10, 10);
console.log(total);

// arrow function one parameter

const sub = (x, y) => x - y;
const subTotal = sub(10, 7);
console.log(subTotal);

// arrow function 

const multiPly = (x, y, z) => x * y * z;
const subMulitply = multiPly(10, 10, 10);
console.log(subMulitply);

// arrow function parameter les 

const name = () => 'MY Name Is Rocky';
const myName = name();
console.log(myName);

// big math 

const doMath = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const multi = x * y;
    const total = sum + sub + multi;
    return total;
}

const result = doMath(10, 5);
console.log(result);