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


const words = ["ground", "control", "to", "major", "tom"];
const letters = ["groundnut", "centre", "till", "main", "tomorrow"];
const map = function(array, callback) {
   const results = [];

   for(let item of array) {
     results.push(callback(item));
   }
   return results;
}
const result = map(words, word => word[0]);
const result1 = map(letters, letter => letter[0]);
console.log(result);
console.log(result1);
assertArraysEqual(result, result1);