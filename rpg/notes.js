// Good morning!  We'll spend the first 15 minutes this morning going over
// a solution to this problem.  Spend a few minutes trying to work out
// a solution yourself.

// Problem:  
    // Write a function that returns an array containing the numbers 1 through 100 with the following stipulations:

    // If the number is divisible by 3, it should be replaced by "fizz".
    // If the number is divisible by 5, replace it with "buzz".
    // If the number is divisible by both 3 and 5, replace it with "fizzbuzz".
    
//     function fizzBuzz(){
//         // must return a new array
//        const result = []
//        for(let i = 1; i <= 100; i++){
//            if(i % 3 === 0 && i % 5 === 0){
//                result.push("fizzbuzz")
//            } else if(i % 3 === 0){
//                result.push("fizz")
//            } else if(i % 5 === 0){
//                result.push("buzz")
//            } else {
//                result.push(i)
//            }
//        }
//        return result
//    }

//    console.log(fizzBuzz()) 
// //    /*
//    returns: [1, 2, "fizz", 4, 5, "buzz", 6, 7, ...14, "fizzbuzz", 16, ...98, "fizz", "buzz"]
//    */








function fizzBuzz(){

const result = []
for(let i = 1; i <=100; i++){
 if (i %3===0 && i %5===0){
        result.push("fizzbuzz")
    }else if(i %3 === 0){
        result.push("buzz")
    }else if(i % 5 === 0){
        result.push("fizz")
    }else{
        result.push(i)
    }
}
return result
}
console.log(fizzBuzz())



// Write a function that takes an array of words and a charater and return each word that has that letter present.
function lettersWithString(arr, char){
    // filter
    const result= arr.filter(function(str){
        if(str.includes(char)){
            return str

        }
    })
    return result
}

console.log(lettersWithStrings(["3", "$$$", "C$4!", "Hey!"], "!"))// => ["C$4", "Hey"]