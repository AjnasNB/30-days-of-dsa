//Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 
function occ(arr,x){
    let first=firstOcc(arr,x)
    let last=lastOcc(arr,x)
    console.log( last-first+1)
}
occ([1,2,2,2,2,3,4,7,8,8],2)