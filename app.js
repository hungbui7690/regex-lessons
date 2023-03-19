/*
  Lookahead
  - In regular expressions, a lookahead allows you to match X but only if it is followed by Y.

  - Here’s the syntax of the lookahead:
    > X(?=Y)

  - In this syntax, the regex engine searches for X and only matches if it is followed by Y.

  - For example, suppose you have the following string:
    > const s = '1 car is 15 feet long';

  - And you want to match the number 15 followed by a space and the literal string feet, not the number 1. To do that, you can use a lookahead in a regular expression:
    > /\d+(?=\s*feet)/

  - In this regular expression:
    >   \d+ matches one or more digits
    >   ?= is the lookahead syntax
    >   \s* matches zero or more white spaces feet matches the literal string feet

*/

// The following code uses the above pattern to match the number that is followed by zero or more spaces and the literal string feet:
const s = '1 car is 15 feet long'
const pattern = /\d+(?=\s*feet)/

const match = s.match(pattern)
console.log(match) // 15
