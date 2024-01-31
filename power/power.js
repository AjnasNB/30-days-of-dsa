// given two numbers. The task is to compute Power(x,n)  which means x to the power y.
// Uses recursion as efficient as possible
function power(x,n){
    if(n==0){
        return 1
    }
    let temp=power(x,Math.floor(n/2))
    temp=temp*temp
    if(n%2==0){
        return temp
    }else{
        return temp*x
    }
}
console.log(power(2,5));