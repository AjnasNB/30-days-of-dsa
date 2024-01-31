# LCM of two numbers
# optimal solution
def gcd(a,b):
    if b==0:
        return a
    return gcd(b,a%b)
def lcm(a,b):
    return (a*b)//gcd(a,b)
print(lcm(10,20))
print(lcm(20,10))