//Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

//naive approach

function missing(arr){
    let n= arr.length+1
    for (let i=1;i<=n;i++){
        if(!arr.includes(i)){
            return i
        }
    }
}
console.log(missing([1,2,3,5]))