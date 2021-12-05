const takeUntil = function(array, callback){
    const newArray = [];
    array.some(function(el){
        newArray.push(el);
        
        return callback(el);
        
    })
   return newArray.slice(0, -1);
}

const data1 = [1,2,5,7,2,-1,2,4,5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('----');
const data2 = ["I've", "Been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

function assertArraysEqual(x, y) {
    console.log(eqArray(x,y));
}

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "Been", "to", "Hollywood"])