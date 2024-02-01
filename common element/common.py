#Find common elements in three sorted arrays
def common(arr1,arr2,arr3):
    arr=[]
    for _ in arr1:
        if _ in arr2 and _ in arr3:
            arr.append(_)
    return arr
arr1=[1, 5, 10, 20, 40, 80]
arr2=[6, 7, 20, 80, 100]
arr3=[3, 4, 15, 20, 30, 70, 80, 120]
print(common(arr1,arr2,arr3))
