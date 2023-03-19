/*
  Multiline mode of anchors ^ and $: The "m" Flag P2
  
*/

let str = `1st line
2nd line
3rd line`

let re = /^\d/gm // global + multi lines
let matches = str.match(re)

console.log(matches) // ["1", "2", "3"]
