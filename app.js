/*
  Regex Replace P3
  - When a regular expression contains the capturing groups, you can reference these groups in the newSubstr using the $N syntax where N is the grouping number. For example, $1 and $2 reference first and second capturing groups.  

*/

// The following example illustrates how to use the replace() method with capturing groups to swap the first and last names in a person name:
let re = /(\w+)\s(\w+)/
let name = 'Jane Doe'
let lastFirst = name.replace(re, '$2, $1')

console.log(lastFirst) // Doe, Jane

/*
How it works.

The regular expression /(\w+)\s(\w+)/ matches one or more word characters, a space, and then one or more word characters. In other words, it matches any string that has a word, space, and another word.

The regular expression contains two capturing groups. The first capturing group captures the first word and the second one captures the second word after the space.

In the newSubstr, we use $1 to reference the first capturing group and $2 to reference the second one. To swap the first name and last name, we place the second match ($2) first and then the first match ($1).
*/
