//Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
function dutch(arr){
    let low=0
    let mid=0
    let high=arr.length-1
    while(mid<=high){
        if(arr[mid]==0){
            let temp=arr[mid]
            arr[mid]=arr[low]
            arr[low]=temp
            low++
            mid++
        }
        else if(arr[mid]==1){
            mid++
        }
        else{
            let temp=arr[mid]
            arr[mid]=arr[high]
            arr[high]=temp
            high--
        }
    }
    return arr
}