let base = parseInt(prompt("Enter base:"));
let distance = parseInt(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutesLate:"));
let seed = parseInt(prompt("Enter seed:"));

if (base < 1 || base > 1000 || distance < 0 || distance > 100 ||
    minutesLate < 0 || minutesLate > 120 || seed < 0 || seed > 9) {
    alert("Invalid Input");
} 
else {

    let fare = base + 7 * distance;

    if (minutesLate > 15) {
        fare += 20;
    }

    if (distance > 10) {
        fare += Math.floor(fare * 0.10);
    }

    if (seed % 2 === 1) {
        fare -= seed;
    } 
    else {
        fare += seed;
    }

    fare = Math.ceil(fare / 5) * 5;

    alert(fare);
}
