//  Find all the Prime Numbers less than or equal to a given Number
//  Sieve of Eratosthenes
// The Sieve of Eratosthenes is a simple algorithm that finds the prime numbers up to a given integer.
function sieve(n){
    let prime=new Array(n+1).fill(true)
    prime[0]=false
    prime[1]=false
    for(let i=2;i*i<=n;i++){
        if(prime[i]){
            for(let j=i*i;j<=n;j=j+i){
                prime[j]=false
            }
        }
    }
    for(let i=0;i<=n;i++){
        if(prime[i]){
            console.log(i);
        }
    }
}

sieve(100)