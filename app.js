/*
  Caret P2
  + ^ – The caret anchor matches the beginning of the text.
  + $ – The dollar anchor matches the end of the text.


*/

let str = 'JavaScript'
console.log(/^S/.test(str)) // false > because string does not start with letter S
