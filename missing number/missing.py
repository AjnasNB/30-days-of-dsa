#Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

def missing(arr):
    n=len(arr)
    total = (n+1)*(n+2)//2
    for i in range(n):
        total -= arr[i]
    return total
print(missing([1,2,3,5]))