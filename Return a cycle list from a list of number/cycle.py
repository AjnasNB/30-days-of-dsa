#Return a cycle list from a list of number

def cycle(n):
    return n[1:] + n[:1] 
n=[1,2,3,4]
print(cycle(n))