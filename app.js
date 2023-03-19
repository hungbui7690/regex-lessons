/*
  Word Boundaries P2

*/

// The following example returns 'JS' because 'Hello, JS!' matches the regular expression /\bJS\b/:
console.log('Hello, JSscript!'.match(/\bJS\b/)) // null

// Note that without \b, the /JS/ matches both 'Hello, JS' and 'Hello, JScript':
console.log('Hello, JSscript!'.match(/JS/)) // ["JS"]
console.log('Hello, JS!'.match(/JS/)) // ["JS"]
