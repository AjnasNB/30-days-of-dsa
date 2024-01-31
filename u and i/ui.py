#Given two sorted arrays, find their union and intersection.

def union(arr1,arr2):

    i = 0
    j = 0
    union = []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            union.append(arr1[i])
            i += 1
        elif arr1[i] > arr2[j]:
            union.append(arr2[j])
            j += 1
        else:
            union.append(arr1[i])
            i += 1
            j += 1
    while i < len(arr1):
        union.append(arr1[i])
        i += 1
    while j < len(arr2):
        union.append(arr2[j])
        j += 1
    return union
def intersection(arr1,arr2):
    i = 0
    j = 0
    intersection = []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            i += 1
        elif arr1[i] > arr2[j]:
            j += 1
        else:
            intersection.append(arr1[i])
            i += 1
            j += 1
    return intersection
print(union([1,2,3,4,5],[1,2,3,4,5]))
print(intersection([1,2,3,4,5],[1,2,3,4,5]))