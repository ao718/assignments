//intro to programming
const readline = require("readline-sync")

//greet player
const name = readline.question("what is your name?");
console.log("thank you "+ name + "!")


//set up global variables
let gameOver = false
let options = ["Put hand in hole", "Find the key", "Open the door"]



// game loop
while(!gameOver){
    const userAnswer = readline.keyInSelect(options,"what would you like to do?: ")

    if(userAnswer === 0){ // They put their hand in the hole.
        console.log("you died, why did you put your hand in the hole. Haven't you ever seen The Mummy?")
        gameOver = true
    }else if(userAnswer === -1){ // They pressed "0" and tried to cancel
        console.log("Borimir says, 'One cannot cancel an escape room'")
    } 

}  