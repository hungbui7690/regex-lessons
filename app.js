/*
  Regex Replace P1
  - The String.prototype.replace() method works with both strings and regular expressions. This tutorial focuses solely on regular expressions.

  - The following shows the syntax of the replace() method:
    > replace(regexp, newSubstr)

  - In this syntax:
    + The regexp is a regular expression to match.
    + The newSubstr is a string to replace the matches. If the newSubstr is empty, the replace() method removes the matches.
  - The replace() returns a new string with the matches replaced by the newSubstr. Note that the replace() method doesn’t change the original string but returns a new string.

  - By default, the replace() method replaces the first match if the regexp doesn’t use the global flag (g). To replace all matches, you use the global flag (g) in the regexp.


*/

// The following example uses the replace() method to replace the first match of the JS string with the JavaScript string:
const s = 'JS and js'
const re = /js/i

const newS = s.replace(re, 'JavaScript')
console.log(newS) // JavaScript and js

// The /js/i matches both JS and js in the 'JS and js' string. However, the replace() method replaces only the first match (JS).
// To replace all matches, you use the global flag (g) in the regular expression.
