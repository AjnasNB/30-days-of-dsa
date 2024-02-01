//Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the array whose sum is equal to K.

function sumtarget(arr,k){
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==k){
                count++
            }
        }
    }

return count
}
console.log(sumtarget([1,5,7,1],6))
