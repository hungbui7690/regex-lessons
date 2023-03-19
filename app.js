/*
  Quantity
  - Exact count {n}
    > A number in curly braces {n}is the simplest quantifier. When you append it to a character or character class, it specifies how many characters or character classes you want to match.

*/

// For example, the regular expression /\d{4}/ matches a four-digit number. It is the same as /\d\d\d\d/:
let str = 'ECMAScript 2020'
let re = /\d{4}/

let result = str.match(re)

console.log(result) // ["2020"]
