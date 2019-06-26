const ask = require('readline-sync')


const player = {
   name: '',
   health: 300,
   weapon: "AK-47",
   catchPhrase: "\"so whats up\"",
   inventory: [],
   attack: function(){
       return Math.floor(Math.random() * 50)
   }
}

const billy = new Enemy("billy & Gang", 100, "fist", "GET OVER HERE", "brass knuckles" )
const bobby = new Enemy("bobby & Gang", 150, "knife", "GIMMIE YOUR WALLET", "switch blade")
const savage = new Enemy("Savages", 200, "9mm", "DIE FOOL", "9mm")

let gameOver = false
let currentEnemies = [billy, bobby, savage]

// Game Functions
function generateEnemy(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        return new Enemy("billy", 100, "fist", "GET OVER HERE", 10)
    } else if(randomNum === 1){
        return new Enemy("bobby", 150, "knife", "GIVE ME YOUR WALLET", 15)
    } else if(randomNum === 2){
        return new Enemy("savage", 200, "9mm", "DIE FOOL", 25)
    }else{
        console.log("hi")
    }
}

function walk(){
   let randomNum = Math.floor(Math.random() * 3)
       if(randomNum === 0){
           let currentEnemy = currentEnemies[0]
           console.log(`${currentEnemy.name} are creeping up!` )
           console.log(`${currentEnemy.name}: "${currentEnemy.catchPhrase}"`)
           battleLoop(currentEnemy)
           console.log(`${playerName} you have ${player.health} hp remaining`)
       }else{
           // what do you want to happen if the battle doesn't happen
       }
}

   console.log('Hello Player!')
   console.log()
   console.log('Welcome to the streets')
   console.log()
   console.log('Beware, you are a long way from home')
   console.log()
   const playerName = ask.question('May I have your name?:')
   console.log()
   console.log(`Thank you ${playerName}`)
//    console.clear()


while(player.health > 0 ){
   const userAnswer = ask.keyInSelect(["walk"] ,"What would you like to do?")
    if (userAnswer === 0){
       walk()
    if(currentEnemies.length === 0){
           gameOver = true
           console.log("YOU WIN there are no more enemies to fight, until next time")
           console.log()
           console.log()
           console.log()
           console.log("Part 2 of the Streets coming soon!")
           player.health = 0
       }
   }
}
console.log('Game Over')

function battleLoop(enemy){
   console.log("...")
   console.log(`${playerName}: ${player.catchPhrase}` )
   while(enemy.health > 0 && player.health > 0){
       const userChoice = ask.keyInSelect(["attack", "join", "run", "print"], "What would you like to do?: ")
    //    const userChoice2 = ask.keyInSelect(["knife", "9mm", "brass knuckles", "AK-47"], "Which would you like to use?: ")
       if(userChoice === 0){
           const attackPower = player.attack()
           const enemyAtk = enemy.eattack()
           player.health -= enemyAtk
           console.log(`Your HP: ${player.health}`)
           enemy.health -= attackPower
           console.log(`Enemy HP: ${enemy.health}`)
           console.log()
           console.log(`${playerName} attacked ${enemy.name} for ${attackPower}!!!!`)
           console.log()
           console.log(`${enemy.name} attacked ${playerName} for ${enemyAtk}`)
           console.log()
        if(enemy.health <= 0){
               console.log(`${enemy.name} is dead` )
               console.log()
               console.log('Voice in your head says: "Dont forget to reload!"')
               console.log()
            //    console.log(dropItem)
               console.log(`${playerName}: "OK IM RELOADED!"`) 
           }
       }
        if(userChoice === 1){
               console.log("you have chosen to join a gang, you and the gang get into some illegal activity, feds pull up, goes through your inventory now your going to jail.")
               player.health = 0
       }
       if(userChoice === 2 ){
            console.log("it doesnt look like its going to be a fair fight")
            console.log()
            console.log(`${playerName}: "look at that!" `)
            console.log()
            console.log(`${enemy.name} is distracted`)
            console.log()
            console.log(`${playerName} is not a coward you cannot run`)
            walk()
    
        // }else if (currentEnemies = 0 ){
        //     console.log(gameOver)

        }if(userChoice === 3 ){
            console.log(playerName, player)
        }if(player.health <= 0){
            console.log( 'Game Over, better luck next time')
            player.health = 0

        }
   }
   pickItem()
  currentEnemies.shift()
}
 
  function Enemy(name, health, weapon, catchPhrase, dropItem){
    this.name = name
    this.health = health
    this.weapon = weapon 
    this.catchPhrase = catchPhrase
    this.dropItem = dropItem
    this.eattack = function(){
    return Math.floor(Math.random() * 15)
    }
  }

  function pickItem(){
    // if (enemy.health <= 0) {
            player.inventory.push(currentEnemies[0].dropItem)
            console.log(`Ok, ${currentEnemies[0].dropItem} has been added to your inventory.`);
            // } 
}
function die(){
    if (player.health <= 0);
    console.log(gameOver)
    console.log("the streets is done")
}

function join(){
    if(userChoice === 1)
    console.log("you have chosen to join a gang, you and the gang get into some illegal activity, feds pull up, goes through your inventory now your going to jail for life")
    player.health = 0
}



//   dropItem = ['brass knuckles', 'switch blade', '9mm'],
//   index = ask.keyInSelect(dropItem, 'Which Item?');
//   console.log(`Ok, ${currentEnemies[0].dropItem} has been added to your inventory.`);
   

  
//   dropItem()
//    if (enemy.health <= 0) {
//         player.itemArr.push(dropItem)
//     }


//   // Enemies
//   const currEnemy = new Enemy("dog", 400, "BRASS KNUCKLES", "GET OVER HERE!", 15 )
//   console.log(`${currEnemy.name}: "GET OVER HERE!"`)
// //   let gameOver = false
// //   let currentEnemies = [billy, bobby, savage]
  
//   // Battle Loop

//   const playerPower = player.attack()
//   const enemyPower = currEnemy.attack()
  
//   player.health -= enemyPower
//   currEnemy.health -= playerPower
  
//   console.log("You hit " +  currEnemy.name + " for " + playerPower)
//   console.log(`${currEnemy.name} hit you for ${enemyPower}`)