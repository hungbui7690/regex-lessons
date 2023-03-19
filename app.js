/*
  Shorthands P3
  - The quantifier * means zero or more. It is the same as {0,}. 
  
  
  - We often use the quantifiers to form complex regular expressions. The following shows some regular expression examples that include quantifiers:
    + Whole numbers:/^\d+$/
    + Decimal numbers:/^\d*.\d+$/
    + Whole numbers and decimal numbers:/^\d*(.\d+)?$/
    + Negative, positive whole numbers & decimal numbers:/^-?\d*(.\d+)?$/
  
*/

// The following example shows how to use the quantifier * to match the string Java followed by any word character:
let str = 'JavaScript is not Java'
let re = /Java\w*/g

let results = str.match(re)

console.log(results) // ["JavaScript", "Java"]
