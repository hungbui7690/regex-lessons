/*
  Named capturing groups P1
  - To access a subgroup in a match, you use an index. However, you may want to access a subgroup by a meaningful name to make it more convenient.

  - To do that, you use the named capturing group to assign a name to a group. The following shows the syntax for assigning a name to a capturing group:
    > (?<name>rule)
    
    > In this syntax:
      + () indicates a capturing group.
      + ?<name> specifies the name of the capturing group.
      + rule is a rule in the pattern.


  - For example, the following creates the names:
    > /?<resource>\w+)\/(?<id>\d+/

    > In this syntax:
      + The resource is the name for the first capturing group
      + The id is the name for the second capturing group.

*/

const path = 'posts/10'
const pattern = /(?<resource>\w+)\/(?<id>\d+)/

const match = path.match(pattern)
console.log(match) // (3) ['posts/10', 'posts', '10', index: 0, input: 'posts/10', groups: {…}]
