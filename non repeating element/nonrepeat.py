#Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the array whose sum is equal to K.

def pair(arr,k):
    count = 0
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i]+arr[j] == k:
                count += 1
    return count
print(pair([1,5,7,1],6))