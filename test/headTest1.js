const Head = require('../head')
const assertEqual = require('../assertEqual');
console.log (assertEqual(Head([5,6,7]), 5));
console.log (assertEqual(Head(['Hello','Lighthouse','Labs']), 'Hello'));