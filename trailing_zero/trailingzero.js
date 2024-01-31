// program to find the trailing zeros in a factorial of a number
// naive approach
function trailingZero(num){
    var fact=1
    while(num>0){
        fact=fact*num
        num--
    }
    
    var count=0
    while(fact%10==0){
        count++
        fact=Math.floor(fact/10)
    }
    return count
}
console.log(trailingZero(5))
