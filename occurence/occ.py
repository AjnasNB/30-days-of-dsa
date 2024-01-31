#Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 
def occ(arr, x):
    count = 0
    for i in range(len(arr)):
        if arr[i] == x:
            count += 1
    return count
print(occ([1,2,2,2,2,3,4,5,6,7,8,9,10], 2))