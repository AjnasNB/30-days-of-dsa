//Funcion to find lcm
// Used naive approach
function lcm(a,b){
    res=Math.max(a,b)
    while(true){
        if(res%a==0 && res%b==0){
            return res
        }
        res++
    }

}

console.log(lcm(98, 56));
console.log(lcm(2, 56));
console.log(lcm(200,100));
