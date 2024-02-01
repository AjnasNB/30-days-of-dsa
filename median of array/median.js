//Median of Two Sorted Arrays
function med(num1,num2){
    let nums=num1.concat(num2);
    nums.sort((a,b)=>a-b);
    
    let len=nums.length;
    
    if(len%2===0){
        return (nums[len/2]+nums[(len/2)-1])/2;
    }
    else{
        return nums[Math.floor(len/2)];
    }
}
console.log(med([1,2],[3,4]));
console.log(med([1,3],[2]));