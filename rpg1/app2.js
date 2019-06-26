// Write a function called antiCaps, which accepts a string and manipulates it as follows
    // Uppercase characters will become lowercase.
    // Lowercase characters will become uppercase.


function antiCaps(str){
    let result = ""
    for(let i = 0; i < str.length; i++){
        
        if(str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase()

        }else {
            result += str[i].toUpperCase()
        }
    }

    return result
}
    
        
console.log(antiCaps('Hello'))
console.log(antiCaps('racEcar'))
console.log(antiCaps('bAnAnA'))

