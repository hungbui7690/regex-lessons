/*
  Capturing groups P2
  - To get the id 10 from the path posts/10, you use a capturing group. To create a capturing group for a rule, you place that rule in parentheses like this:
    > (rule)

  - The following example creates a capturing group that captures the id value from the path posts/10:
    > '\w+/(\d+)'

*/

/////////////////////////////////

// In this pattern, we place the rule \d+ inside the parentheses (). If you run the program with the new pattern, you’ll see that it displays one match:
const path = 'posts/10'
const pattern = /\w+\/(\d+)/

const match = path.match(pattern)
console.log(match) // ['posts/10', '10', index: 0, input: 'posts/10', groups: undefined]

//////////////////////////////////

// The match() method returns an array of matches. The first element is the whole match ('posts/10') while the second one ('10') is the value of the capturing group.

// Note that the String.match() method will not return groups if you set the g flag e.g., /\w+\/(\d+)/g. If you use the g flag, you need to use the String.matchAll() method instead to get the groups.
