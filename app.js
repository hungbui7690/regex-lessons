/*
  Shorthands P2
  - The quantifier ? means zero or one. It is the same as {0,1}. For example, /colou?r/ will match both color and colour:


*/

let str = 'Is this color or colour?'
let result = str.match(/colou?r/g) // zero or 1 letter "u"

console.log(result) // ["color", "colour"]
