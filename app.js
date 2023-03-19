/*
  Regex Replace P4
  - The second argument of the replace() method can be a function like this:
    > replace(regexp, replacerFunction)

  - The replace() method calls the replacerFunction after it finds the first match. The replacerFunction is used to create a substring to replace the match.

  - If the regexp uses the global flag (g), the replace() method will call the replacerFunction after every match.

  - The replacerFunction has the following arguments:

    + match specifies the matched substring.
    + p1, p2, … the values of the capturing groups in the regexp.
    + offset is an integer that specifies the offset of the matched substring within the input string.
    + string is the input string.
    + groups is an object whose are are the named capturing group and values are matched values.

  - Let’s take an example of using the replace() method with a replacer function.

  - Suppose you have a string like this:
    > backgroundColor

  - And you want to transform it into something like:
    > background-color

  - To do that you can use the replace() method with a replacer function.

    
*/

const regex = /[A-Z]/g

function replacer(match, offset) {
  return (offset > 0 ? '-' : '') + match.toLowerCase()
}

// The replacer() function adds a hyphen if the matched letter is not at the beginning of the string and concatenates the hyphen with the matched letter converted to lowercase.
// Third, use the replace() method to replace the match with the substring returned from the replacer() function:
function addHyphen(prop) {
  return prop.replace(regex, replacer)
}

const prop = 'backgroundColor'
console.log(addHyphen(prop)) // background-color
