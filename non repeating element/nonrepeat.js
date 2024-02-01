//Find first non-repeating element in a given Array of integers
function firstnonrepeat(arr){
    let obj={};
    for (let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1;
        }
        else{
            obj[arr[i]]=1;
        }
    }
    for (let i=0;i<arr.length;i++){
        if (obj[arr[i]]==1){
            return arr[i];
        }
    }
    return "No non-repeating element";
    
}
console.log(firstnonrepeat([1,2,3,4,5,6,7,8,9,1]));