const assertEqual = require('./assertEqual')

function Head(element = []) { 
    return element[0];
}

console.log (assertEqual(Head([5,6,7]), 5));
console.log (assertEqual(Head(['Hello','Lighthouse','Labs']), 'Hello'));