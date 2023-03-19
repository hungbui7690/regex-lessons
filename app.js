/*
  The Ignore Flag (i) P2

*/

let regex = new RegExp('hi', 'i') // (***) alternative

const result = regex.test('HI, John')
console.log(result)
