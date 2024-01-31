//Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.
// Note: If there is no decreasing sequence, then return the last element as answer.
function peak(arr,n){
    let low=0
    let high=n-1
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if((mid==0 || arr[mid-1]<=arr[mid]) && (mid==n-1 || arr[mid+1]<=arr[mid])){
            return arr[mid]
        }
        else if(mid>0 && arr[mid-1]>arr[mid]){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }
    return -1

}
console.log(peak([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5],15));
console.log(peak([1,2,3,4,5,6,7,8,9,10],10));