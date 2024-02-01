// Two sum
function twosum(nums,target){
    dict={}
    for(let i=0;i<nums.length;i++){
        if(target-nums[i]  in dict){
            return [dict[target-nums[i]],i]
        }
        else{
            dict[nums[i]]=i
        
        }
    }
    return "No two sum solution"
}
console.log(twosum([2,7,11,15],9));