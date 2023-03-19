/*
  Capturing groups P1
  - Suppose you have the following path:
    > resource/id

  - For example:
    > posts/10

  - In the path, the resource is posts and id is 10. To match the path, you use the following regular expression:
    > /\w+\/\d+/

  - In this pattern:
    >   \w+ is a word character set with a quantifier (+) that matches one or more word characters.
    >   / matches the forward slash (/). The backslash (\) escapes the forward slash,
    >   \d+ is the combination of the digit character set and a quantfifer (+), which matches one or more digits.

*/

// The following uses the regular expression /\w+\/\d+/ pattern to match the string ‘posts/10':
const path = 'posts/10'
const pattern = /\w+\/\d+/

const match = path.match(pattern)
console.log(match) // ['posts/10', index: 0, input: 'posts/10', groups: undefined]
