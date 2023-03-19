/*
  Multiple capturing groups P2

*/

// To access the first and second subgroups, you use match[1] and match[2]. Note that the match[0] returns the entire match.
const path = 'posts/10'
const pattern = /(\w+)\/(\d+)/

const match = path.match(pattern)
console.log(match[0], match[1], match[2]) // posts/10 posts 10
