let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
    let randomInt=Math.floor(Math.random()*9)
    return randomInt;
}
const compareGuesses=(userGuess,compGuess,randomInt)=>{
    let humDiff = Math.abs(userGuess-randomInt);
    
    let compDiff = Math.abs(compGuess-randomInt);

    if (humDiff > compDiff){
        return true;
    }
    if (compDiff > humDiff){
        return false;
    }
    if (compDiff === humDiff){
        return true;
    }
}
const updateScore=(winner)=>{
    if (winner==='human'){
        humanScore ++;
    }
    else if (winner==='computer'){
        computerScore ++;
    }

}
const advanceRound=()=>{
    currentRoundNumber=currentRoundNumber + 1;
}