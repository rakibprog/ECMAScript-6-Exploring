// array extract 
// take value in array 
const numbers = [1, 55, 66, 23, 99, 12, 66, 88];
console.log(...numbers);

// get max value in array  
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

// array copy 
const numbers2 = [200, ...numbers, 100];
numbers.push(100);
console.log(numbers);
console.log(numbers2);