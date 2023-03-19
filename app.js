/*
  Multiple capturing groups P1
  - To capture both the resource (posts) and id (10) of the path (post/10), you use multiple capturing groups in the regular expression as follows:
    > /(\w+)\/(\d+)/
  
  (***) The regex has two capturing groups one for \w+ and the other for \d+ .

*/

// The following script shows the entire match and all the subgroups:
const path = 'posts/10'
const pattern = /(\w+)\/(\d+)/

const match = path.match(pattern)
console.log(match) // (3) ['posts/10', 'posts', '10', index: 0, input: 'posts/10', groups: undefined]
