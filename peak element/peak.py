#Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.
def peak(arr,n):
    if arr[0] > arr[1]:
        return arr[0]
    if arr[n-1] > arr[n-2]:
        return arr[n-1]
    for i in range(1,n-1):
        if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
            return arr[i]
    return -1
print(peak([1,2,3,4,5,4,3,2,1],9))
print(peak([1,2,3,4,5],5))
print(peak([5,4,3,2,1],5))
print(peak([1,2,3,4,5,6,7,8,9],9))