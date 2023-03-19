/*
  Regex Replace P2  

*/

// The following example uses the replace() method with a regular expression containing a global flag (g) to replace all matches:
const s = 'JS and js'
const re = /js/gi

const newS = s.replace(re, 'JavaScript')
console.log(newS) // JavaScript and JavaScript
