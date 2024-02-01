# median of arrays
def median(num1,num2):
    num=num1+num2
    num.sort()
    if len(num)%2==0:
        return (num[len(num)//2]+num[len(num)//2-1])/2
    else:
        return num[len(num)//2]
num1=[1,3]
num2=[2]
print(median(num1,num2))