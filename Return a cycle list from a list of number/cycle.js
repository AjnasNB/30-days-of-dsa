//Return a cycle list from a list of number
function cycle(arr){
    i1=arr.shift();
    ilast=arr.pop();
    arr.unshift(ilast);
    arr.push(i1);
    return arr;
}
console.log(cycle([1,2,3,4,5,6,7,8,9]));
console.log(cycle([1,2,3,4,5,6,7,8,9]));