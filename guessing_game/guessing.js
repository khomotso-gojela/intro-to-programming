let secret = Math.floor(Math.random() * 20) + 1;
let guess = parseInt(prompt("Please guess the secret number (1-20)"));
console.log(secret)

if (guess == secret) {
    alert("Correct Guess!")
} else {
    alert("Sorry, incorrect Guess!")    
}

while(guess != secret) {
    guess = parseInt(prompt("Please guess the secret number  again(1-20)"));
    
    if (guess < secret) {
        alert("Incorrect, too low")
    }
    if (guess > secret) {
        alert("Incorrect, too high")
    }

}
alert("Correct Guess!");