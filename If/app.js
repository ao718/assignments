//the two objects provided when we link an html page to a js page
//console.dir(document)
//console.dir(window) 

var divArr = document.getElementsByTagName("div")

//var firstDiv = document.getElementById("my-div")

var classDivs = document.getElementsByClassName("my-other-div")

var secondDiv = classDivs[1]

console.log(classDivs)
console.log(secondDiv)

// Query Selectors
var divsArr = document.querySelectorAll(".my-other-div")
var div = document.querySelector("#mydiv")

// How we get a JS element to show up on a DOM
    // 1: Create the element
var h1 = document.createElement("h1")
    
    // 2: Edit the Element
h1.textContent = "Hello World"
h1.style.color = "pink"
h1.style.backgroundcolor = "#3338"
h1.style.fontFamily = "sans-serif"


    // 3: Display the Element on the HTML
       // (append the element to the DOM object)
var firstDiv = document.getElementById("my div")
firstDiv.appendChild(h1)

//     1: Create the Element
var myImg = document.createElement("img")
myImg.style.width = "400px"

//     2: Edit the Element
myImg.src = ""

//     3: Put it on the DOM
firstDiv.appendChild(myImg)


// 1:
var pTag = document.createElement("p")

// 2:
   pTag.textContext = "Harry Potter"
   pTag.classList.add("ptag-class")
   pTag.classList.remove("ptag-class")
   pTag.classList.toggle("ptag-class")

// 3:
   firstDiv.insertBefore(pTag, h1)


       
