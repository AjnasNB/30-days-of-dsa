//Given two sorted arrays, find their union and intersection.
function union(arr1,arr2){
    let union=[]
    let i=0
    let j=0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            union.push(arr1[i])
            i++
        }else if(arr1[i]>arr2[j]){
            union.push(arr2[j])
            j++
        }else{
            union.push(arr1[i])
            i++
            j++
        }
    }
    while(i<arr1.length){
        union.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        union.push(arr2[j])
        j++
    }
    return union
}
function intersection(arr1,arr2){
    let intersection=[]
    let i=0
    let j=0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            i++
        }else if(arr1[i]>arr2[j]){
            j++
        }else{
            intersection.push(arr1[i])
            i++
            j++
        }
    }
    return intersection
}
console.log(union([1,2,3,4,5,6,7],[2,4,6,8,10,12]))
console.log(intersection([1,2,3,4,5,6,7],[2,4,6,8,10,12]))
