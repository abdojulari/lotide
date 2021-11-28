function eqArray(a, b){
    const container =[];
    // validate the length of the arrays
    if (a.length === b.length) {
        // loop through the elements and compare
            for (let i = 0; i < a.length; i++) { 
                if (a[i] === b[i]) {
                    container.push(true);
                }
                else {
                    container.push(false); 
                }           
            }
            // check 
            let checker = arr => arr.every(Boolean);
            return checker(container);
    }
    else{
        return false;
    }
}

function eqObject(obj1, obj2){
    const container =[];
    // validate the length of the arrays
    if (Object.entries(obj1).length === Object.entries(obj2).length) {
        //loop through the elements and compare
        Object.keys(obj1).forEach(function (key){
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
               container.push(eqArray(obj1[key], obj2[key]))
            }
            else if (obj1[key] === obj2[key]) {
                        container.push(true);
                    }
                    else {
                        container.push(false); 
            }
           
         });
        
        let checker = arr => arr.every(Boolean);
        return checker(container);
    }
    else{
        return false;
    }
}


const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    // console.log(inspect(actual));
    if (!eqObject(actual, expected)) {
        return `Assertion failed: ${actual} !== ${expected}`;
    }
    else {
        return `Assertion Passed: ${actual} === ${expected}`;
    }

}
console.log(assertObjectsEqual({a: 2, c: [1,2], b: 4 }, {a:2, b:4, c:[1,2]}));
