//Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

//Note: There may be more than one subarray with sum as the given sum, print first such subarray. 

function sub(arr,sum){

    let curr_sum=arr[0]
    let start=0
    for(let i=1;i<arr.length;i++){
        while(curr_sum>sum && start<i-1){
            curr_sum=curr_sum-arr[start]
            start++
        }
        if(curr_sum==sum){
            return arr.slice(start,i)
        }
        if(i<arr.length){
            curr_sum=curr_sum+arr[i]
        }
    }
    return -1
}
console.log(sub([1,2,3,7,5],12))