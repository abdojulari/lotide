const assertEqual = function (actual, expected) {
    if (actual !== expected) {
        return `Assertion failed: ${actual} !== ${expected}`;
    }
    else {
        return `Assertion Passed: ${actual} === ${expected}`;
    }

};

function eqArray(a, b){
    const container =[];
    for (let i = 0; i < a.length; i++) {
     
      if (a[i] === b[i]) {
        container.push(true);
      }
      else {
        container.push(false); 
      }
      
  }
  let checker = arr => arr.every(Boolean);
  return checker(container);
}

console.log(assertEqual(eqArray([2,3,4], [2,5,4]), true));
console.log(assertEqual(eqArray([2,3,4], [2,3,4]), true));