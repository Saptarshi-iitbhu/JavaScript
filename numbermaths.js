const num1 = 400; // It is primitive value
console.log(num1);

const num2 = new Number(400.12342341234) // It is an object
console.log(num2);

// Above both are the ways to declare an number but main difference is num1 is a primitive number and num2 is Number object

console.log(typeof num1); // NUmber as output
console.log(typeof num2); // Object as output

// num1 is stored in stack memory but num2 is stored in a heap memory

console.log(num2.toString().length)
console.log(num2.toFixed(3)) // used to round of the number by decimal place of 3

console.log(num2.toPrecision(3)) // this is used to calculate precision value not based of after decimal but on the whole number


console.log(Math.abs(-1)) // used to calculate the absolute value
console.log(Math.round(4.6)) // used to caulate the round of value
console.log(Math.ceil(4.2)) // used to caulate the ceil value
console.log(Math.floor(4.6)) // used to calculate the floor value

console.log(Math.random()) // used to generate random values between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1) // used to generate any random integers between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // general formula to genrate a random integer between min and max value