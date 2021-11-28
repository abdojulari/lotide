const assertEqual = function (actual, expected) {
    if (actual !== expected) {
        return `Assertion failed: ${actual} !== ${expected}`;
    }
    else {
        return `Assertion Passed: ${actual} === ${expected}`;
    }

};


function findKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
}

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));


console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
