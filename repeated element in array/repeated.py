#Find the first repeating element in an array of integers

def firstrepeat(arr):
    obj={}
    for _ in arr:
        if _ in obj:
            return _
        else:
            obj[_]=1
    return "No repeating element"
arr=[10, 5, 3, 4, 3, 5, 6]
print(firstrepeat(arr))