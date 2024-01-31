#Given an array, write functions to find the minimum and maximum elements in it without sort.
def minmax(arr):
    min = arr[0]
    max = arr[0]
    for i in range(1,len(arr)):
        if arr[i] < min:
            min = arr[i]
        if arr[i] > max:
            max = arr[i]
    return min,max 