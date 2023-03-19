/*
  Lookbehind
  - In regular expressions, a lookbehind matches an element if there is another specific element before it. A lookbehind has the following syntax:
    >   (?<=Y)X
  
  - In this syntax, the pattern match X if there is Y before it.

  - For example, suppose you want to match the number 900 not the number 1 in the following string:
    >   '1 computer costs $900'

  - To do it, you use a lookahead in the regular expression as follows:
    >   /(?<=\$)\d+/

  - In this regular expression:
    + The (?<=\$) matches an element if there is a literal string $ before it. Because $ is a special character in the regex, we need to use the backslash \ to escape it. By doing this, the regex engine treats \$ as a literal character $.
    + The \d+ matches one or more digits.

*/

// The following example illustrates how to use a lookbehind in a regular expression to match a number that has the $ sign before it:
const s = '1 computer costs $900'
const pattern = /(?<=\$)\d+/

const match = s.match(pattern)
console.log(match) // [ '900', index: 18, input: '1 computer costs $900', groups: undefined ]
