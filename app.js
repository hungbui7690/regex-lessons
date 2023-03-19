/*
  Named capturing groups P2
  - The match has a groups property that is an object. The match.groups object has properties whose names are the capturing group name and values are the capturing values. 

*/

const path = 'posts/10'
const pattern = /(?<resource>\w+)\/(?<id>\d+)/

const match = path.match(pattern)
for (const name in match.groups) {
  // resource posts
  // id 10
  console.log(name, match.groups[name])
}
