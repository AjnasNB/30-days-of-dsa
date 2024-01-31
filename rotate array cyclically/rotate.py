#Given an array, the task is to cyclically rotate the array clockwise by one time. 


def rotate(arr):
    temp = arr[-1]
    for i in range(len(arr)-1,0,-1):
        arr[i] = arr[i-1]
    arr[0] = temp
    return arr
print(rotate([1,2,3,4,5,6,7,8,9,10]))