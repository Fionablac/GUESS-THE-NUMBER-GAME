// generate secret number
let randomNumber = Math.floor(Math.random()* 50) + 1;
let attempts = 0;

// Getting Element
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const attemptsText = document.getElementById("attempts");

// handling guess
guessBtn.addEventListener("click",() => {
    const userGuess= Number(guessInput.value);

restartBtn.addEventListener("click",() => {
    
}
)    
    if(!userGuess || userGuess < 1 || userGuess > 50){
        message.textContent = "Enter a Number between 1 and 50";
        return;
};
attempts++;
attemptsText.textContent = `Attempt: ${attempts}`;

if (attempts > 4) {
    message.textContent ="game over"
    guessBtndisabled ="true"
    alert ("Game over, Do you wish to continue")
}else if (restartBtn){
}
if(userGuess < randomNumber) {
    message.textContent = "too low";

} 
else if (userGuess > randomNumber){
    message.textContent = "too high";
   }else{
    message.textContent = `correct! you guessed it in ${attempts} tries`
    guessBtn.disabled = true;
   }
    guessInput.value = "";
  });


  


