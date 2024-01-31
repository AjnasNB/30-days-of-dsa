// Given a number chceck if it is prime or not
// naive approach

function isPrime(n){
    if(n<=1){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(11));
console.log(isPrime(12));