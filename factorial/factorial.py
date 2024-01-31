# find factroial of a number 
# used recursion
def factroial(num):
    if num == 0:
        return 1
    return num * factroial(num - 1)
# Example
print(factroial(5))
print(factroial(0))