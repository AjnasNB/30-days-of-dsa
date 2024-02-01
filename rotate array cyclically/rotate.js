//Given an array, the task is to cyclically rotate the array clockwise by one time. 

function rotate(arr){
    let temp=arr[arr.length-1]
    for(let i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1]
    }
    arr[0]=temp
    return arr
}
console.log(rotate([1,2,3,4,5]))

