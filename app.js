/*
  Intro
  - example: 
    > +1-(408)-555-0105
  - we want to turn this into 
    > 14085550105

///////////////////////////////

  Digit Character P1
  - \d

*/

let phone = '+1-(408)-555-0105'
let re = /\d/g

console.log(phone.match(re)) // ['1', '4', '0', '8', '5', '5', '5', '0', '1', '0', '5']
