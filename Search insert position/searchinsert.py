def set(nums,target):
    left,right=0,len(nums)-1
    while left<right:
        mid=left+(right-left)
        if(nums[mid]==target):
            