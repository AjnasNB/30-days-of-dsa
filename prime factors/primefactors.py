# prime factor finder 
# optimized solution
def prime_factor(num):
    if num <= 1:
        return "Invalid Input"
    i = 2
    while i*i <= num:
        while num % i == 0:
            print(i)
            num = num // i
        i += 1
    return num
# Example
print(prime_factor(12))
print(prime_factor(15))
print(prime_factor(19))