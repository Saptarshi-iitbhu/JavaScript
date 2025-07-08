const obj1 = new Object(); // this is a singleton object
const obj2 = {}; // this is a non-singleton object

//declaration of objects inside another object

const user = {
    email : "absd@gamil.com",
    fullname: {
        username : {
            firstname : "Saptarshi",
            lastname : "Chakraborty"
        }
    }
}

console.log(user.fullname.username.firstname) 

const obj = {1 : 'a', 2 : 'b'};
const obje = {3 : 'c', 4 : 'd'};

const res = Object.assign({}, obj, obje); // concatenating two objects..assign() is a static method

console.log(res)

console.log(Object.keys(res)) // it will return array of the key
console.log(res.hasOwnProperty('1')) // used to check whether a particular key is presnt in that object or not

// Destructing of objects

const myself = {
    name : "Saptarshi",
    college : "IIT BHU",
    rollno : 21034012,
    dept : "Ceramic"
}

const {college} = myself; // it is used when we require particular key of an object for many times
console.log(college);