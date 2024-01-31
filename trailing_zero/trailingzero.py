# find trailing zero in factorial of a number
# use optimized solution
def trailing_zero(num):
    count = 0
    i = 5
    while num // i >= 1:
        count += num // i
        i *= 5
    return count
# Example
print(trailing_zero(5))
print(trailing_zero(100))