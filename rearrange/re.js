//An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
function rearrange(arr){
    let j=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            if(i!=j){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
            j++
        }
    }
    return arr
}
console.log(rearrange([-1, 2, -3, 4, 5, 6, -7, 8, 9]))