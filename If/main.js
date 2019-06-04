/* if (5 > 3){
    console.log("is greater than")
} 

var animal = ("cat")
if (animal.length === 3){
    console.log ("is the length")
}
if ("cat"==="dog"){
    console.log ("meow")
} else {
    console.log ("not the same")
}
*/
/* var movieGoers = [
    { name: "Mike",
     age: 12,   
     }, {
     name: "Chandra",
     age: 77,
     },{
     name: "Kevin",
     age: 18,
     }
 ]
 
 for (i = 0; i < movieGoers.length; i++) {
     if (movieGoers[i].age > 17) {
         console.log(movieGoers[i].name + " is old enough ")
     } else {
         console.log(movieGoers[i].name + " is not old enough ")
     }
         
     

}
*/

 /* var person = [
{   name: "Bobby",
    age: 12
},{
    name: "Benny",
    age: 19
}]

for (i=0; i < person.length; i++){
    if (person[i].age > 17){
        console.log(person[i].name + " ALL ACCESS ")
    } else (
        console.log(person[i].name + " ACCESS DENIED ")
    )
}  

if (1===1){
   console.log("strict")
   }
   else (
       console.log("loose")
   )
}
*/


/*
for (i=0; i < 10; i++){
    console.log(i)
}
*/


/*
for (i=0; i < 10; i++){
    console.log(i)
}
for (i=9; i >= 0; i--){
    console.log(i)
}

*/


/*
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i=0;  i < fruit.length; i++){
    console.log(fruit[i] + " ")
}
*/

/*
for (i=20; i >= 10; i--){
    console.log(i)
}

for (i=0; i <= 100; i+=2){
    console.log(i)
}
*/

/*
var num = []
for (i=20; i >= 10; i--){
    num.push(i)
}
console.log(num)
*/

/*
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(i=20; i > fruit.length; i++){
    fruit.push()
    
}
console.log()
*/
/*
var fName = "shawn"
var lName = "mendez"
console.log(fName[3])
//w
console.log(lName[lName.length-1])
//z
console.log(fName.toUpperCase())

var name = "Harry"
console.dir(name)

// .concat()
var fName = "harry "
var lName = "potter"

var fullName = fName.concat(lName)
console.log(fullName)
// .indexOf()
    console.log(lName.indexOf("t"))  //2
    console.log(lName.lastIndexOf("t")) //3
    console.log(lName.indexOf("z")) //-1
//  .indexOf() & .lastIndexOf()
    if(lName.indexOf("z") === -1){
        console.log("there is no 'z' in Potter")
    }
//  .slice()
    var phoneInput = '7185017485'
    var areaCode = phoneInput.slice(0,3)
    var prefix = phoneInput.slice(3, 6)
    var last4 = phoneInput.slice(6)

    var phoneNumber = '(' + areaCode + ')' + prefix + '-' + last4
    console.log(phoneNumber)
    // console.log(areaCode)

    // .split()
        var jedi = "yoda"
        //var jedi = "yoda"
        var jediArr = jedi.split("")
        //console.log(jediArr)
        var jediStr = jediArr.join("")   // Array Method
        //console.log(jediStr)

    function sum(num1, num2){
        //var sum =num1 + num2
        return num1 + num2
        //return sum
    }
    //console.log(sum(15, 10))
    var total = sum(10, 15)

    // Other function types:
    // Callback functions, anonymous functions, fat arrow functions

    // For loops
        // So i dont have to do the same thing over and over again.
    var spaceship = "deathstar"
    var dogs = ["spot","sparky","dog"]

    for(var i=0; i < spaceship.length; i++){
        console.log(spaceship[i])
    }



    
    /*for(var i=0; i<= 100; i++){
        console.log(i)
    }
    */
  // var team = "Yankees"
   //console.log(team.toUpperCase())
  // console.log(team.toLowerCase())

// write a function that takes a string and returns the last half of that string uppercased
// - Write a function
// - Takes a single string as a function parameter
// - make test case(s)
// - returns the last half of the string uppercased
    // 1 - Cut in half
    // 2 - Uppercase 2nd half
    // 3 - return final string half


function secondHalfCaps(str){
    var secondHalf = str.slice(Math.floor(str.length / 2))
    var upperCased = secondHalf.toUpperCase()
    return upperCased
}
//test cases to make sure the function works
console.log(secondHalfCaps("hello")) // "LOO"


var result = secondHalfCaps("goodby") // "DBY"
console.log(result)


// JS Array Methods
    var names = [ "Rick", 'Morty', 'Dumbledore', "Magrid"]

// push, pop, shift, unshift
    names.push("Jon") // adds an item to the end of an array
    //console.log(names)
    names.pop()       // removes last item of the array
    //console.log(names)
    names.shift()    // Removes the first item of an array
    //console.log(names)
    names.unshift("Ron")
    //console.log(names)

// .slice(beginning, end)
    var animals = ["dog","cow","pig","chicken","horse","monkey","squirrel"]

    //console.log(animals.slice(4))

// .indexOf() & .lastIndexOf()
    console.log(animals.indexOf("chicken"))      // 3
    console.log (animals.lastIndexOf("chicken")) // 7

// .concat()
    var arr1 = ['a','b','c']
    var arr2 = ['d','e','f']
    console.log(arr1.concat(arr2))

// .join() - Turns array into string at joined character
    var arr3 = ['h','e','l','l','o']
    var arr4 = [1,2,3,4,5]
    console.log(arr3.join('')) //hello
    console.log(arr4.join(''))
// reverse a string
// name.split('').reverse().join('')


    var name = "harry"
    console.log(name.split('').reverse().join(''))


// .splice()

    var cars = ['volkswagen', 'ford', 'mazda','chevy','subaru','jeep']

    //get rid of mazda
    var mazda = cars.splice(2,1)
    console.log(mazda)
    console.log(cars)

    // Add Tesla in Chevy's place
    var chevy = cars.splice(3, 1, 'tesla', 'dog','cat')
    console.log(cars.length)

    // .reverse()
        var sentenceArr = "somanydynamos".split('')
        console.log(sentenceArr.reverse())