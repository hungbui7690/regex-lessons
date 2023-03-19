/*
  Sets
  - The square brackets search for any character in a set. For example, [aeiou] matches any of the five characters: 'a', 'e', 'i', 'o' and 'u'. The [...] is called a set.

*/

// For example, the regular expression /[cbr]ats/g matches cats, bats, and rats:
let str = 'How cats, rats, and bats became Halloween animals'
let re = /[cbr]ats/g
let results = str.match(re)

console.log(results) // ["cats", "rats", "bats"]
