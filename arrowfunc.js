const user = {
    username : "Saptarshi",
    ID : "123456",

    welcome : function() {
        console.log(`${this.username}, welcome to our site`);
        console.log(this) // this is refering to the current object that is user
    }
}

// this keyword used to refer to the current context

user.welcome()
user.username = "Sam"
user.welcome()

console.log(this) // this refers to an empty object because there is not object globally because we are running on node environment
// when it run on browser then it return windows as output because it is running on windows environment

function func() {
    username = "Saptarshi"
    console.log(this); // here it will not return a empty object there will several global object mentioned and many other
    console.log(this.username) // it will print ans undefined result
}

func() //Hence this keyword works only in object not in function

//declaration of arrow function

const func1 = () => {
    username = "Saptarshi"
    console.log(this)
}

func1() // here also it prints then same result as the normal function

// A normal arrow function
const add = (num1, num2) =>{ // explicit way of writing the arrow function
    return num1 + num2
}

console.log(add(num1, num2))

const add1 = (num1, num2) => num1 + num2 // implicit way of writing an arrow funtion

// Both add1 and add function will return same result just the difference is the way of declaration of the arrow function

const obj = (num1, num2) => ({username : "Saptarshi"}) // way of returning an object using an arrow function