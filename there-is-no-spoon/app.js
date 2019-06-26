// let cup = {
//     color: "white",
//     price: "free",
//     coffee: "false",
//     write: 
// }


var name = "John"
var age = 101
var pets = ["cat", "dog"]
var petObjects = []

function runForLoop() {
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] }
        if (pets[i] === "cat") {
            var name = "fluffy"
        } else {
            var name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

runForLoop()



// var course = 3;
// if (course == 1) {
//    document.write("<h1>HTML Tutorial</h1>");
// } else if (course == 2) {
//    document.write("<h1>CSS Tutorial</h1>");
// } else {
//    document.write("<h1>JavaScript Tutorial</h1>");
// }

//The continue statement breaks only one iteration in the loop, and continues with the next iteration.
// for (i = 0; i <= 10; i++) {
//    if (i == 5) {
//       continue; 
//    }
//    document.write(i + "<br />");
// }