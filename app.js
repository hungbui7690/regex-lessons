/*
  Regex match() P2
  - Using the JavaScript regex match() method with the expression that has the global flag

*/

// The following example illustrates how to use the match() method with a regular expression that doesn’t have a global flag. It returns an array of the first match with additional properties.
let str = 'Price: $5–$10'
let result = str.match(/\$\d+/)
console.log(result) // '$5', index: 7, input: 'Price: $5–$10', groups: undefined]

// The additional properties are:

// + index: is the index at which the match was found.
// + input: a copy of the search string.
// + groups: is the object of named capturing groups whose keys and values are the names and the capturing groups respectively. In this example, it is undefined because we did to define any named capturing groups.
