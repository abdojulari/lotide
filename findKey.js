const findKey = function(obj, callback) {
    const truth = [];
    for(const [key, value] of Object.entries(obj)){
       if (callback(value)){
          truth.push(`${key} : ${callback(value)}`);
       }
        
    }
console.log(truth.slice(0,-1));
}

const result = findKey({
    "Blue Hill" : {stars: 1},
    "Akaleri" : {stars: 3},
    "noma" : {stars: 2},
    "elBulli" : {stars: 3},
    "Ora" : {stars: 2},
    "Akelarre" : {stars: 3},
}, x => x.stars === 2);


console.log(result);