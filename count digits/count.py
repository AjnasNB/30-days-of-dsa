# Count of digits in a number
# used recursion
def count(num):
    if num == 0:
        return 0
    return 1 + count(num // 10)
# Example
print(count(12345))
print(count(0))
print(count(14535435))


