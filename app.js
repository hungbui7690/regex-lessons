/*
  The range {n,m} P1
  - The range matches a character or character class from n to m times.

*/

// For example, to find numbers that have two, three, or four digits, you use the regular expression /\d{2,4}/g:
let str = 'The official name of ES11 is ES2020'
let re = /\d{2,4}/g

let result = str.match(re)
console.log(result) // ["11", "2020"]
