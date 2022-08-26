let input = document.getElementById("input");
let submitButton = document.getElementById("submit");
let attemptedGuesses = document.getElementById("attemptedGuesses");
let hint = document.getElementById("hint");
let remainingGuessesSpan = document.getElementById("remainingGuesses");
let restartButton = document.getElementById("restart");
let prompt = document.getElementById("prompt");
const MAX_GUESSES = 6;

let remainingGuesses = MAX_GUESSES;

remainingGuessesSpan.innerHTML = remainingGuesses;

let randomNumber = Math.floor(Math.random()*100) + 1;
console.log(randomNumber);

submitButton.addEventListener("click", ()=>{
    if(remainingGuesses > 0){
        let newGuessSpan = document.createElement("span");
        newGuessSpan.style.margin = "0 4px";
        let newGuess = document.createTextNode(input.value);
        newGuessSpan.appendChild(newGuess);
        attemptedGuesses.appendChild(newGuessSpan);
        remainingGuesses--;
        remainingGuessesSpan.innerHTML = remainingGuesses;
        if(input.value > randomNumber){
            hint.innerHTML = "you guessed too high";
        } else if(input.value < randomNumber){
            hint.innerHTML = "you guessed too low";
        } else {
            hint.style.display = "none";
            input.style.display = "none";
            submitButton.style.display = "none";
            prompt.innerHTML = "You guessed correctly!!";
        }
    } else {
        hint.innerHTML = "you have run out of guesses";
        input.style.display = "none";
        submitButton.style.display = "none";
    }
    
})

restartButton.addEventListener("click", ()=>{
    submitButton.style.display = "inline";
    hint.style.display = "inline";
    hint.innerHTML = "";
    remainingGuesses = 10;
    remainingGuessesSpan.innerHTML = remainingGuesses;
    randomNumber = Math.floor(Math.random()*100) + 1;
    console.log(randomNumber);
    attemptedGuesses.innerHTML = "";
    input.style.display = "block";
    input.value = "";
})