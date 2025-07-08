// Array Declaration

const arr = [1, 2, 3, 4, 5]
const arr1 = new Array(0,2,3,1,2,3,4); // This uses the array constructor

const a = [5]; // It will create an array [5]
const a1 = new Array(5) // It will create an empty array of length 5

console.log(arr[0])

// JavaScript Arrays are resizable and can contain a mix of different datatypes
// Javascript arrays are not associative arrays so, array elements cannot be accessed using arbitary strings as indexes
// JavaScript arrays-copy-operations create shallow copies (A shallow copy of an object is a copy whose porperties share the same references)

//METHODS IN ARRAY

arr.push(6) // used to insert an element at the end os an array
arr.pop() // used to remove the last element of the array
arr.unshift(0) // used to insert element at the beginning of an array
arr.shift() // used to remove the first element present in an array

arr.includes(9) // used to check whether an element is present in the array or not. if not present then -1 will be declared

const newarr = arr.join(); // this is used to convert an array into string by concatinating each of the arrays elements
console.log(newarr)
console.log(typeof newarr)


const arr2 = [1,2,3,4,5] 
const arr3 = [6,7,8]

// arr2.push(arr3)
// console.log(arr2) // push operation make changes in the original array and in this case the arr2 = [1,2,3,4,5,[6,7,8]] that is push donot conactinate to arrays

const b = arr2.concat(arr3) // concat operations make new array and returns the concatinated form of both arrays
console.log(b)

const allnumbers = [...arr2,...arr3] // this is the spread function whivh works almost same as concat operations and here we can concatinate more than 2 arrays
console.log(allnumbers)

const c = [1,2,3,[4,5],6,[7,[8,9,10]]];
const another_c = c.flat(Infinity); // used to convert an array of any dimentions into a single dimention
console.log(another_c)

console.log(Array.from("Saptarshi")) // convert anything into an array
console.log(Array.from({name : "Saptarshi"})) // here it will return an empty array unless we mention using which (keys or value) we should make the array