function check( nums,target){
    var left=0 
    var right=nums.length-1
    while (left<=right){
    var mid=Math.floor(left+(right-left)/2)
    if (nums[mid]===mid)
        {return mid}
    else if(nums[mid]<target)
       { left= mid+1}
    else
        {right= mid-1}
    }

return left+1
}
console.log(check([5, 6, 12, 32, 45], 12))