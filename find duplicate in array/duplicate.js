//Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.
function duplicate(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        arr[arr[i]%n]=arr[arr[i]%n]+n;
    }
    for(let i=0;i<n;i++){
        if(arr[i]>=n*2){
            console.log(i);
        }
    }

}
duplicate([1,2,3,1,3,6,6]);