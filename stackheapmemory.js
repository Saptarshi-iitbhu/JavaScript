// Static memory space

let a = "I am Saptarshi";
let b = a;

b = "I am Saptarshi Chakraborty";

console.log(a); // output is "I am Saptarshi"
console.log(b); // output is "I am Saptarshi chakraborty"

// Heap Memory Space

let num1 = {
    email : "google@gmail.com",
    userId : 123456
}

let num2 = num1

num2.email = "user2@gmail.com";

console.log(num1.email);// output is user2@gmail.com
console.log(num2.email);// output is user2@gmail.com