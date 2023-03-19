/*
  Combine Both Anchors P1
  - You will often need to use anchors ^ and $ to check if a string fully matches a pattern.


*/

// The following example checks if an input string matches a time format hh:mm like 12:05:
let isValid = /^\d\d:\d\d$/.test('12:05')
console.log(isValid) // true
