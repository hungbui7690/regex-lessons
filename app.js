/*
  Shorthands P1
  - The quantifier {1,} means one or more which has the shorthand as +.

*/

let phone = '+1-(408)-555-0105'
let result = phone.match(/\d+/g)

console.log(result) // ["1", "408", "555", "0105"]
