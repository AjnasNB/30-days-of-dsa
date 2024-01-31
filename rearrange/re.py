#An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
def Rearrange(arr):
    j = 0
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i],arr[j] = arr[j],arr[i]
            j += 1
    return arr
print(Rearrange([-1, 2, -3, 4, 5, 6, -7, 8, 9]))