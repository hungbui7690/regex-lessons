/*
  Regex match() P3
  - Using the JavaScript Regex match() method with the named capturing group

*/

// The following shows how to use the match() method with a named capturing group. It captures the "yellow" into a group named "color":
let str = 'I like yellow color palette!'

let re = /(?<color>yellow) color/
let result = str.match(re)

console.log(result) // (2) ['yellow color', 'yellow', index: 7, input: 'I like yellow color palette!', groups: {…}]
