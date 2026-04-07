let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

if (L < 1 || R > 1000000 || L > R || K < 2 || K > 9) {
    alert("Invalid Input");
} 
else {

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let count = 0;

    for (let x = L; x <= R; x++) {
        if (x % K === 0) {
            let num = x;
            let sum = 0;
            let hasZero = false;

            while (num > 0) {
                let digit = num % 10;
                if (digit === 0) {
                    hasZero = true;
                    break;
                }
                sum += digit;
                num = Math.floor(num / 10);
            }

            if (!hasZero && isPrime(sum)) {
                count++;
            }
        }
    }

    alert(count);
}
