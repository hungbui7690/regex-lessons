/*
  Word Boundaries P3
  - It’s possible to use the word boundary with digits.

*/

// For example, the regular expression \b\d\d\d\d\b matches a 4-digit number surrounded by characters different from \w:
console.log('ES 2015'.match(/\b\d\d\d\d\b/)) // ["2015"]
