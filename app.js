/*
  Word Boundaries P4
  - As you have seen so far, the patterns \d\d\d\d and \d\d has been used to match a four-digit or a two-digit number.

  - It’ll be easier and more flexible if you use quantifiers that will be covered in the quantifiers tutorial. Basically, you can use \d{4} instead of \d\d\d\d, which is much shorter.

*/

// The following example uses the word boundary to find the time that has the format hh:mm e.g., 09:15:
let str = 'I start coding JS at 05:30 AM'
let re = /\b\d\d:\d\d\b/
let result = str.match(re)

console.log(result) // ["05:30"]
