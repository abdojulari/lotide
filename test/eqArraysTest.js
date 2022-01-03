const eqArray = require('../eqArrays');
const assertEqual = require('../assertEqual');
console.log(assertEqual(eqArray([2,3,4], [2,5,4]), true));
console.log(assertEqual(eqArray([2,3,4], [2,3,4]), true));