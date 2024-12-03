function getMaxSubarrayMultiply(arr){
    let max= -Infinity
    arr.forEach(element => {
        let currentMultiply;
        if(element.length > 0){ currentMultiply = element.reduce((a,b) => a*b)}
        if (currentMultiply>max)
            max = currentMultiply
    })
    return max;
}
let nums = [[2,3],[-2,4]]
console.log(getMaxSubarrayMultiply(nums))