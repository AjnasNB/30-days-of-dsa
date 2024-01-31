# find a digit is palindrome or not

def palindrome(n):
    temp=n
    rev=0
    while n>0:
        rev=rev*10+n%10
        n=n//10
    if temp==rev:
        print(f"{temp} is a palindrome")
    else:
        print(f"{temp} is not a palindrome")
palindrome(1234)
palindrome(121)
palindrome(12321)
palindrome(123456789)
