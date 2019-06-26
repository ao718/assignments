const ask = require('readline-sync')

/////////////////////
// Globa Variables
const player = {
    name: "",
    health: 100,
    attack: function(){
        return Math.floor(Math.random() * 25 )
    }
}


let gameOver = false
const enemyPower = enemy.attack()
const


////////////////////////
//Game function
function walk(){

    const randomNum = Math.floor(Math.random() * 3)
         if(randomNum === 0){
            
            // enemy aappears
            const currentEnemy = generateEnemy() // generate random from at least three types
            console.log
            // battle loop
            battleloop(currentEnemy)
        }

}
function Enemy(name, health, weapon, catchPhrase ){
    this.type = name
    this.health = health 
    this.weapon = weapon
    this.catchPhrase = catchPhrase
    this.attackPower = attackPower
}
function genrateEnemy(){
    
    const randomNum = Math.floor(Math.random() * 3)

    if(randomNum === 0){
        return new Enemy("billy", 200) 
    }else if(randomNum === 1){
        return new Enemy("bobby", 350)
        
    }else {
        return new Enemy("savage", 500)
    }
        
}
  
function battleloop(enemy){
    console.log(`${enemy.name} is creeping up on you`)
    while(Enemy.health < 0 && player.health < 0){
        const userChoice = ask.keyInSelect(["fight", "run"], "what would you like to do?: ")
        if(userChoice === 0){
            const attackPower = player.attack()
            enemy.health -= attackPower
            player.health -= enemyPower
            console.log(`${player.name} attacked ${enemy.type} for ${attackPower}!!!`)
            console.log(`${enemy.name} attacked ${player.name} for ${attackPower}`)
            }
        }
    }
   





// Game
console.log("Hello Player, Welcome to the streets!")
player.name = ask.question("May I have your name?: ")
console.log(`Thank you ${player.name}`)


while(!gameOver){
    const userAnswer = ask.keyInSelect(["walk"], "What would you to do?: ")
}   if(userAnswer === 0){
    // Create a random number between 0 - 2
       walk()

    }




