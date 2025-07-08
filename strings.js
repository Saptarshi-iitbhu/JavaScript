let str1 = "Saptarshi Chakraborty"
let str2 = "IIT BHU"

console.log(`My name is ${str1} and my college name is ${str2}`) // backtics metthod is used where concept of string interpolation is used

const name = new String("Saptarshi") //another way to declare a string

console.log(name[0]);
console.log(name.__proto__)

console.log(name.length)
console.log(name.toUpperCase());
console.log(name.charAt(1));
console.log(name.indexOf('S'));

const str = "Saptarshi Chakraborty";
console.log(str.substring(0,str.indexOf(' ')));
console.log(str.slice(-21,str.indexOf(' '))); // slice can take -ve value as argument which is not in the case of sunstring


const st = "     Saptarshi.     ";
console.log(st);
console.log(st.trim()); // trim is used to remove the spaces from the beginning and the end prent in a string

const s = "Saptarshi-Chakraborty Rahul-Singh"
console.log(s.replace('-'," "));
console.log(s.split(" ")); //splits the string on the basis on " "
