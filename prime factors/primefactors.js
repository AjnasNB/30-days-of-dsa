//find prime factors of a number
//naive approach
function isPrime(num){
    //check if num is prime using optimized approach
    if(num<=1){
        return false
    }
    if(num<=3){
        return true
    }
    if(num%2==0 || num%3==0){
        return false
    }
    for(let i=5;i*i<=num;i=i+6){
        if(num%i==0 || num%(i+2)==0){
            return false
        }
    }
    return true



}
 function primeFactors(n){

    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            let x=i
            while(n%x==0){
                console.log(i);
                x=x*i
            }
            
        }
    }

 }
    primeFactors(100)
    