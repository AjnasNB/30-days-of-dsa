function removed(nums,val){
    if (nums.length==0){
        return 0
    }
    un_removed_digits=0
    i=0
    for(j=0;j<nums.length;j++){
        if(nums[j]!=val){
            nums[i]=nums[j]
            un_removed_digits++
            i++

        }
    }
    return un_removed_digits

}
console.log(removed([3,2,2,3],3))