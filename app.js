/*
  The dot (.) character class P3
  - If you want to use the dot (.) character class to match any character including the newline, you can use the s flag


*/

let re = /ES.6/s
console.log('ES\n6'.match(re)) // ['ES\n6', index: 0, input: 'ES\n6', groups: undefined]
