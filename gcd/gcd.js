function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
console.log(gcd(98, 56));
console.log(gcd(0, 56));
console.log(gcd(100,200));
