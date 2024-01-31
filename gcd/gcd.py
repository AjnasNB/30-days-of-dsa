def gcd(num1, num2):
    if num2 == 0:
        return num1
    else:
        return gcd(num2, num1 % num2)

print(gcd(10, 20))
print(gcd(20, 10))
print(gcd(7, 5))