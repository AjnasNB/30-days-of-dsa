#Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.def duplicate(arr):
def duplicate(arr):
    n= len(arr)
    for i in range(n):
        if arr[i]%n < n:
            arr[arr[i]%n] += n
        else:
            arr[arr[i]%n] -= n
    for i in range(n):
        if arr[i] >= n*2:
            print(i, end=" ")
    print()
arr = [1, 6, 3, 1, 3, 6, 6]

duplicate(arr)
