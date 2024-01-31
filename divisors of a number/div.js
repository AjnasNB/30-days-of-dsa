// Find a program to get devisors of a number
function div(n){
    for(let i=1;i<=n;i++){
        if(n%i==0){
            console.log(i);
        }
    }
}
div(100)
