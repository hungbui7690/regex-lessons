/*
  Inverse Classes P1
  - \D is the inverse of \d
    > \D – matches any character except a digit e.g., a letter.
    > \S – matches any character except a whitespace e.g., a letter
    > \W – matches any character except a word character e.g., non-Latin letter or space.



*/

let phone = '+1-(408)-555-0105'
let re = /\d/g

console.log(phone.match(re).join('')) // 14085550105
