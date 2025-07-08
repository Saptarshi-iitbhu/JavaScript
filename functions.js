// declaraation of function

function func() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
}

// func()

// function func1(num1, num2){ // here num1, num2 are called parameters
//     console.log(num1 + num2);
// }

// func1(5, 6) // 5 ,6 are the arguments

function func1(num1, num2){
    const result = num1 + num2;
    return result
}

// We should note that we cannot execute anything after we return any result from a function

func1(4,5) // when we returning some value from a funtion then it should not be called like this
const ans = func1(4, 5)
console.log("Result : " , ans); // at that time we sould call like this

function user(username){
    return (`${username} just logged in`);
}

console.log(user("Saptarshi"))
console.log(user("")) // output for will the empty string followed by the comment
console.log(user()) // output for this will be undefined

// when we dont know number of parameters that we are passing

function calculateprice(...num1){
    return num1
}

console.log(calculateprice(200, 300, 400, 500)) // this will return the array of these numbers

function calculateprice1(val1, val2,...num1){
    return num1
}

console.log(calculateprice1(200, 300, 400, 500)) // for this val1 = 200, val2 = 300, rest of the parameters will be stored in an array