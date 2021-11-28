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
            console.log(obj1[key]+':'+obj2[key]); 
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            //    console.log(eqArray(obj1[key], obj2[key]));
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

console.log(eqObject({a: 2, c: [1,2], b: 4 }, {a:2, b:4, c:[1,2]}));

