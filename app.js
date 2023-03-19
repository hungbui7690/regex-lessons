/*
  The range {n,m} P2
  - Because the upper limit is optional, the {n,} searches for a sequence of n or more times. For example, the regular expression /\d{2,}/ will match any number that has two or more digits.


*/

let str = 'The official name of ES6 is ES2015'
let re = /\d{2,}/g

let result = str.match(re)
console.log(result) // ["2015"]
