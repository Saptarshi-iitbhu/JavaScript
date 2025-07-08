// Object Literals

const mysym = Symbol("key1");

const obj1 = {
    name : "Saptarshi",
    "full name" : "Saptarshi Chakraborty",
    [mysym] : "mykey",
    age : 18,
    car : "Maruti Alto",
    mail : "saptarshi@gmail.com",
    drive : function(){
        console.log("Driving");
    }
};

console.log(obj1.name)
console.log(obj1["name"])
console.log(obj1["full name"]) // it is the only way to declare if the key value is declared as string in the object
console.log([mysym]) // declaration of symbol in an object

obj1.mail = "saptarshi@outlook.com";
// Object.freeze(obj1); // after this statement no on changes will occur if we change any key value pair
obj1.mail = "saptarshichakraborty@gmail.com";

console.log(obj1)

obj1.greeting = function(){
    console.log("Hello Saptarshi");
}

console.log(obj1.greeting) // here only funtion reference is passed
console.log(obj1.greeting()) // here value is returned by the function

// accessing any key from an object through a function

obj1.greeting2 = function(){
    console.log(`Hello, ${this["full name"]}`)
}

console.log(obj1.greeting2())