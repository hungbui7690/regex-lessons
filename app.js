/*
  Caret P1
  - Anchors have special meaning in regular expressions. They do not match any character. Instead, they match a position before or after characters:
    + ^ – The caret anchor matches the beginning of the text.
    + $ – The dollar anchor matches the end of the text.


*/

let str = 'JavaScript'
console.log(/^J/.test(str)) // begin with J > true
