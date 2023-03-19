/*
  Inverse Classes P2
  - \D is the inverse of \d
    > \D – matches any character except a digit e.g., a letter.
    > \S – matches any character except a whitespace e.g., a letter
    > \W – matches any character except a word character e.g., non-Latin letter or space.



*/

let phone = '+1-(408)-555-0105'
let re = /\D/g

console.log(phone.replace(re, '')) // replace non-digit with ''
