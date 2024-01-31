// Count of number of digits in a number

function countDigits(num){
    var count = 0;
    while(num>0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}
console.log(countDigits(1234));