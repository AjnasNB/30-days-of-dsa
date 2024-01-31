// program to check if the number is palindrome or not
function checkPalindrome(n) {
    var temp=n
    var rev=0
    while(n>0){
        var rem=n%10
        rev=rev*10+rem
        n=Math.floor(n/10)
    }
    if(temp==rev){
        return temp+" is a palindrome number"
    }
    else{
        return temp+" is not a palindrome number"
    }
}
console.log(checkPalindrome(121))
