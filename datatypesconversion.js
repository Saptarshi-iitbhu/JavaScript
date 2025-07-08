let score = 33

console.log(typeof(score)); // used to determine the datatype of the given variable. It is very important because it will help us to determine the datatype of the variable that is used in frontend and can be used easily in backend.
console.log(typeof score);

let age = "13"

console.log(typeof age)

let ageinnumber = Number(age); // typecasting in Javascript
console.log(typeof ageinnumber);

let name = "23212dsdfsfv"
let num = Number(name);
console.log(typeof num); // The datatyoe will be a number
console.log(num) // Give output as NaN

let n = null
let m = Number(n);
console.log(typeof m); // The datatype will be a number
console.log(m) // Give output as 0

let n1 = undefined
let m1 = Number(n1);
console.log(typeof n1); // The datatype will be undefined
console.log(m1); // NaN as output

let n2 = true;
let m2 = Number(n2);
console.log(typeof n2); // The datatyoe will be a boolean
console.log(typeof m2); // The datatype will be a number
console.log(n2); // true as output
console.log(m2); // 1 as output and if it was false then it will be 0

let n3 = 33;
let m3 = String(n3);
console.log(typeof m3); // string as output
console.log(m3); 