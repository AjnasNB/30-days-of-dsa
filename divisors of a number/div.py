# divisor finder
# optimized solution
def dev(num):
    i = 1
    while i*i <= num:
        if num % i == 0:
            print(i)
            if i != num//i:
                print(num//i)
        i += 1
# Example
dev(15)
