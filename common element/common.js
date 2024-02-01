//Find common elements in three sorted arrays
function common(arr1,arr2,arr3){
    let arr=[];
    for (let i=0;i<arr1.length;i++){
        if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
            arr.push(arr1[i]);
        }
    }
    return arr;
}
console.log(common([1,2,3,4,5],[2,3,4,5,6],[3,4,5,6,7]));