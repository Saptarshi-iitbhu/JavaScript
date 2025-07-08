// if - else

const temp = 40

if(temp < 50){
    console.log("Temperature is less than 50")
}
else{
    console.log("Temperature is greater than 50")
}

const num = 900

if(num > 100){
    const q = 12
    console.log(q * num)
}
else{
    console.log("not_executed")
}

// console.log(q * 900) // it will thorw an error because q is local variable and is not declared globally

//Switch - Case

// Normal Snippet of a Switch Ccase statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const num1 = 3;

switch (num1) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("February")
        break;

    case 3:
        console.log("March")
        break;

    case 4:
        console.log("April")
        break;

    default:
        console.log("default case")
        break;
}

// falsy values -----> false, null, undefined, Nan, 0, -0, "", BigInt 0n
// anything that are not mentioned  in falsy values are truthy values

// Nullist Coalescing Operator ------> used to handle the case if the value received is null or not then other value will be assigned

let val1 = 5 ?? 10; // output will be 5 for this case
let val2 = null ?? 10; // output will be 10 for this case
let val3 = undefined ?? 13 // output will be 13 for this case

console.log(val1)
console.log(val2)
console.log(val3)

// Ternary Operator

let n = 100;
console.log((n > 50) ? "small" : "greater")

// Higher order Array Loops

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const it of arr) {
    console.log(it)
}

// Maps

const mp = new Map() // declaration of map mp
mp.set("jan", "January") // inserting of elements in map
mp.set("feb", "February")
mp.set("mar", "March")
mp.set("april", "April")

for(const [key, value] of mp){
    console.log("Key :" + key + " " + "Value :" + value)
}

// Higher Order Array for Object

const obj = {
    cpp : "C++",
    c : "C",
    js : "JavaScript",
    rb : "ruby",
    py : "Python"
}

for(const key in obj){
    console.log(`${key} is the key value of ${obj[key]}`)
}

arr = ["js", "cpp", "c", "py", "ruby"]

for(const it in arr){ // main difference in for-in for loop and for-of for loop is that for-in prints the key values whereas for of prints the value present on that particular key
    console.log(it)
}

//accessing the array of objects
// For each loop

const arr1 = [
    {
        languagename : "javascript",
        languagefile : "js"
    },
    {
        languagename : "c++",
        languagefile : "cpp",
    },
    {
        languagename : "python",
        languagefile : "py"
    }
]

arr1.forEach( (item) =>{ // for-each loop does not return any value
    console.log(item.languagefile);
})

const arr2  =[1, 2, 3 ,4, 5, 6, 7, 8, 9]

const m = arr2.filter( (num) => {
    return num > 4
}) // filter return values
console.log(m)

const newnum = arr2.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 40) // chain process
console.log(newnum)

// reduce 
const initial = 0
const sum = arr2.reduce((accumulator, currentvalue) => accumulator + currentvalue, initial);
console.log(sum)