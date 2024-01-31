//kth largest and smallest element in an array
function kth(arr,k){

    let sorted=arr.sort((a,b)=>a-b)
    return ("kth largest= "+sorted[k-1]+" kth smallest= "+sorted[sorted.length-k])
}
console.log(kth([1,2,3,4,5,6,7,8,9,10],3))