const assertEqual = function (actual, expected) {
    if (actual !== expected) {
        return `Assertion failed: ${actual} !== ${expected}`;
    }
    else {
        return `Assertion Passed: ${actual} === ${expected}`;
    }

};

function Head(element = []) { 
    return element[0];
}

console.log (assertEqual(Head([5,6,7]), 5));
console.log (assertEqual(Head(['Hello','Lighthouse','Labs']), 'Hello'));