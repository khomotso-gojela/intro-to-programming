let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    'Sunglasses',
    'Umbrella',
    'Hat',
    'Scarf',
    'game',
]

let word = words[Math.floor(Math.random() * words.length)]

let answerArray = []

for (let i = 0; i < word.length; i++) {
 answerArray[i] = "_"
}

let remainingLetters = word.length
let count = 0

while (remainingLetters > 0 && count < 6) {

    alert(answerArray.join(" "))

    let guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase()

    if (guess === null || count >= 6) {
        alert("Game Ended")
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.")
    } else if (answerArray.some(item => item == guess)) { 
        alert('Letter already guessed, try again')
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }

        if (!word.includes(guess)) {
            count++
        }

    }

}

if ( remainingLetters == 0 ) {
    alert("Congradulations!")
}
if (count >= 6) {
    alert('Game over! You guessed wrong 6 times')
    alert("The answer was " + word)
}