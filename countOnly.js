const assertEqual = function (actual, expected) {
    if (actual !== expected) {
        return `Assertion failed: ${actual} !== ${expected}`;
    }
    else {
        return `Assertion Passed: ${actual} === ${expected}`;
    }

};

const countOnly = (a, object) => {
    const b  = [];
    const counts = {};
    // extract the key and delete key with false
    for (let key in object) {
        if(object[key] === false) {
            delete object[key];
        }
        else{
            b.push(key);
        }
    }
    // check if subarray is contained in the main array, eliminate those not included
    const difference = a.filter( x => b.includes(x) );
    // Count unique values returned  
    for (let i = 0; i < difference.length; i++) {
        counts[difference[i]] = 1 + (counts[difference[i]] || 0); 
    }
    return counts;
}

const firstnames = [ 'Karl', 'Salima', 'Agouhanna', 'Fang','Kavith', 'Jason', 'Salima', 'Fang', 'Joe']

const result = countOnly(firstnames,{'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false})
console.log(result);

console.log(assertEqual(result['Jason'], 1));
console.log(assertEqual(result['Karima'], undefined));
console.log(assertEqual(result['Fang'], 2));
console.log(assertEqual(result['Agouhanna'], undefined));