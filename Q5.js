let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

if (N < 1 || N > 1000000 || seed < 0 || seed > 9) {
    alert("Invalid Input");
} 
else {

    let m = 0;
    let sum = 0;
    let divisor = seed + 2;

    while (sum < N) {
        m++;
        if (m % divisor !== 0) {
            sum += m;
        }
    }

    alert(m + " " + sum);
}
