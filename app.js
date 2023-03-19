/*
  The range {n,m} P3
  
*/

// The following example uses the regular expression /\d{1,}/g to match any numbers that have one or more digits in a phone number:
let numbers = '+1-(408)-555-0105'.match(/\d{1,}/g)
console.log(numbers) // ["1", "408", "555", "0105"]
