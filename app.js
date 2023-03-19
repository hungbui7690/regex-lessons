/*
  The Global Flag (g)
  - without global flag > return the first match

*/

let message = 'Hi, are you there? hi, HI...'
let regex = /hi/gi

let matches = []
let match

do {
  match = regex.exec(message) // true/false
  if (match) matches.push(match)
} while (match !== null)

console.log(matches) // returns array of arrays
