let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

if (N < 1 || N > 1000000 || K < 2 || K > 9) {
    alert("Invalid Input");
} else {

    function isPalindrome(num) {
        let str = num.toString();
        let rev = str.split("").reverse().join("");
        return str === rev;
    }

    let found = -1;

    for (let X = 0; X <= 100000; X++) {
        let value = N + X;
        if (value % K === 0 && isPalindrome(value)) {
            found = X;
            break;
        }
    }

    alert(found);
}
