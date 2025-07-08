// Global scope

var num1 = 10
let num2 = 20
const num3 = 30

// Local Scope -----> a, b, c

if(true){
    var a = 10
    let c = 10
    const b = 10
}

console.log(a) // It will give an compilation error because a is declared inside a scope 
console.log(b) // It will give same result as a
console.log(c) // This will not give any error because c is declared as var for this reason var is avoided to be used