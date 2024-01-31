// to find the factorial of a number
function factorial(n){
    var fact=1
    while(n>0){
        fact=fact*n
        n--
    }
    return fact

}
console.log(factorial(5))
console.log(factorial(0))