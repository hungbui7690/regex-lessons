/*
  Intro
  - example: 
    > +1-(408)-555-0105
  - we want to turn this into 
    > 14085550105

///////////////////////////////

  Digit Character P2
  - \d

*/

let phone = '+1-(408)-555-0105'
let re = /\d/g

let numbers = phone.match(re).join('')

console.log(numbers) // 14085550105
