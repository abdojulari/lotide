const middle = arr => {
    const mid = Math.floor(arr.length / 2);
    
    nums = [...arr].sort((a, b) => a - b);
    console.log(mid);
    return arr.length % 2 !== 0 ? nums[mid] : nums[mid - 1]+ ',' + nums[mid];
}

console.log(middle([2,8,7,0,4,5]));
