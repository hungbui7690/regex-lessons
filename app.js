/*
  Negative Lookbehind
  - To negate a lookbehind, you use a negative lookbehind with the following syntax:
    >   (?<!Y)X
  
  - In this syntax, the regex engine matches X if there is no Y before it. 

*/

// The following example uses a regular expression with a negative lookbehind to match a number that doesn’t have the $ letter before it:
const s = '1 computer costs $900'
const pattern = /(?<!\$)\d+/

const match = s.match(pattern)
console.log(match) // 1

////////////////////////////////////

// A lookbehind (?<!Y)X matches X only if is is preceded by Y.
// A negative lookbehind (?<!Y)X matches X only if it is not preceded by Y.
