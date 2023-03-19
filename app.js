/*
  Multiline mode of anchors ^ and $: The "m" Flag P1
  - The default of the anchor ^ or $ is the single-line mode. In the single-line mode, the anchor ^ and $ matches the beginning and the end of a string.

  - To enable the multiline mode, you use m flag. In the multiline mode, the ^ or $ anchor matches the beginning or end of the string as well as the beginning or end of lines.


*/

let str = `1st line
2nd line
3rd line`

let re = /^\d/g // start with digit > though we use global flag, it just return the first match
let matches = str.match(re)

console.log(matches)
