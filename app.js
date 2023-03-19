/*
  Intro
  - example: 
    > +1-(408)-555-0105
  - we want to turn this into 
    > 14085550105

///////////////////////////////

  Whitespace 
  - \s

  Word Character 
  - \w 
    > [A-Za-z0-9_]


*/

let str = 'O2 is oxygen'
let re = /\w\d/g // match a word followed by a digit

console.log(str.match(re))
