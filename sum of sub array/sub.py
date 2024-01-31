#Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

#Note: There may be more than one subarray with sum as the given sum, print first such subarray. 
def sub(arr,sum):
    curr_sum = arr[0]
    start = 0
    n = len(arr)
    for i in range(1,n):
        while curr_sum > sum and start < i-1:
            curr_sum -= arr[start]
            start += 1
        if curr_sum == sum:
            return arr[start:i]
        curr_sum += arr[i]
    return -1
print(sub([1,2,3,7,5],12))