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

let str = 'ES6 Tutorial'
let re = /ES\d/g // ES followed by a digit like ES6

console.log(str.match(re)) // ['ES6']
