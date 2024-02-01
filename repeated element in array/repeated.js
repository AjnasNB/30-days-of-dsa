//Find the first repeating element in an array of integers
function firstrepeat(arr){
    let obj={};
    for (let i=0;i<arr.length;i++){
        if (obj[arr[i]]){
            return arr[i];
        }
        else{
            obj[arr[i]]=1;
        }
    }
    return "No repeating element";
}
console.log(firstrepeat([1,2,3,4,5,6,7,8,9,1]));