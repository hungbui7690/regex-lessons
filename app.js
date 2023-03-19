/*
  Multiple Lookaheads
  - It’s possible to have multiple lookaheads in a regular expression with the following syntax:
    > X(?=Y)(?=Z)
  - In this syntax, the regex engine performs the following steps:
    > Search for X
    > Check if Y is immediately after X, skip if it isn’t.
    > Check if Z is also immediately after Y; skip if it isn’t.
    > If both tests pass, return X as a match; otherwise, search for the next match.
    (***) Therefore, the X(?=Y)(?=Z) matches X followed by Y and Z simultaneously.

//////////////////////////////////

  Regex negative lookaheads
  - Suppose you want to match the number 1 but not the number 15 in the following string:
    > const s = '1 car is 15 feet long';

  - To do that, you use a negative lookahead. Here’s the syntax of the negative lookahead:
    > X(?!Y)

  - In this syntax, the regex engine matches X only if it is not followed by Y.

*/

// The following example illustrates how to use a negative lookahead:
const s = '1 car is 15 feet long'
const pattern = /\d+(?!\s*feet)/

const match = s.match(pattern)
console.log(match) // 1

////////////////////////////////////////

// A regex lookahead X(?=Y) matches X only if it is followed by Y.
// A negative regex lookahead X(?!Y) matches X only if it is not followed by Y.
