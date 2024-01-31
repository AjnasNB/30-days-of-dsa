#kth largest and kth smallest
def kth(arr,k):
    arr.sort()
    return "kth largest= ",arr[k-1]," kth smallest =",arr[len(arr)-k]
print(kth([1,2,3,4,5],2))