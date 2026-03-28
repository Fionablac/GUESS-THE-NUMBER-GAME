// generate secret number
let randomNumber = Math.floor(Math.random()* 50) + 1;
let attempts = 0;
const maxAttempts = 5;

// Getting Element
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const attemptsText = document.querySelector("#attempts span");


function restartGame(){
    randomNumber = Math.floor(Math.random()* 50) + 1;
    attempts= 0;
    attemptsText.textContent = attempts;
    message.textContent = "";
    guessInput,value = "";
    guessBtn.disabled = false
}

// handling guess
guessBtn.addEventListener("click",() => {
    const userGuess= Number(guessInput.value);
    
    if(!userGuess || userGuess < 1 || userGuess > 50){
        message.textContent = "Enter a Number between 1 and 50";
        return;
};
attempts++;
attemptsText.textContent = `Attempt: ${attempts}`;


if(userGuess < randomNumber) {
    message.textContent = "too low";

} 
else if (userGuess > randomNumber){
    message.textContent = "too high";
   }else{
    message.textContent = `correct! you guessed it in ${attempts} tries`
    guessBtn.disabled = true;
   }

   if(attempts === maxAttempts){
    message.textContent = `Game over, the number  was ${randomNumber}`;
    guessBtn.disabled = true;

    setTimeout(restartGame, 2500);
   } 
    guessInput.value = "";
  });
  restartBtn.addEventListener("click", restartGame)


  


