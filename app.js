/*
  Word Boundaries P1
  - The (\b) is an anchor like the caret (^) and the dollar sign ($). It matches a position that is called a “word boundary”. The word boundary match is zero-length.

  - The following three positions are qualified as word boundaries:
    + Before the first character in a string if the first character is a word character.
    + After the last character in a string if the last character is a word character.
    + Between two characters in a string if one is a word character and the other is not.

  - Simply put, the word boundary \b allows you to carry the match the whole word using a regular expression in the following form:
    > \bword\b

*/

console.log('Hello, JS!'.match(/\bJS\b/)) // ["JS"]
