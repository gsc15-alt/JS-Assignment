let a = parseInt(prompt("Enter correct answers:"));
let b = parseInt(prompt("Enter partial answers:"));
let c = parseInt(prompt("Enter wrong answers:"));

if (a < 0 || a > 100 || b < 0 || b > 100 || c < 0 || c > 100) {
    alert("Invalid Input");
} 
else {

    let score = 3 * a + b - 2 * c;

    if (score < 0) {
        score = 0;
    }

    if (a + b + c > 50) {
        score -= 10;
    }

    let status;

    if (score >= 60) {
        status = "PASS";
    } 
    else {
        status = "FAIL";
    }

    alert(score + ", " + status);
}
