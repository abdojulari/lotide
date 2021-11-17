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


function without(a,b) {  
   const difference = a.filter( x => !b.includes(x) );
   return difference;
}

console.log(without([2,3,4,6,7], [3,2]));
// assertion 
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);