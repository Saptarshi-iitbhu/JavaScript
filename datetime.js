const mydate = new Date() // used to declare a date

// different way to repesent a date and time

console.log(typeof mydate) // date is always an object
console.log(mydate.getDate())
console.log(mydate.toString())
console.log(mydate.toDateString())

const createdate = new Date(2023,7,7); // how to declare own date (year, month, date) month is based on 0-based indexing

console.log(createdate.toDateString())