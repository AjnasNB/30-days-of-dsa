# Twosum
def twosum(nums,target):
    d={}
    for i,num in enumerate(nums):
        if target-num in d:
            return [d[target-num],i]
        d[num]=i
    return []
nums=[2,7,11,15]
target=9
print(twosum(nums,target))