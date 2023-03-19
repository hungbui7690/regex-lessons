/*
  Regex match() P1
  - The String match() method matches a string against a regular expression:
    >   str.match(regexp);

  - If the regexp is not a regular expression, the match() will convert it to a regular expression using the RegExp() constructor. The match() returns an array depending on whether the regular expression uses the global flag (g) flag or not:
    + If the regexp uses the g flag, then match() method returns an array containing all the matches. The result does not contain the capturing groups.
    + If the regexp doesn’t use the g flag, the match() method will return the first match and its related capturing groups. The result of the match is the same result as RegExp.exec() with additional properties. See the example below for the details.

  - The match() returns null if it does not find any matches.

*/

// The following example shows how to use the match() method with the global flag (g). It returns an array of matches:
let str = 'Price: $5–$10'
let result = str.match(/\$\d+/g)
console.log(result) // ["$5", "$10"]
// In this example, the match() searches for any number that follows the $ sign.
