
// var total = 0;
// while(true){
//     total++
//     console.log(total)
// }


// const div = document.getElementById('print')

// const intervalID = setInterval(addLetter, 250)

// let phrase = "Press Start".split("")
// let counter = 0

// function addLetter(){
//   counter++
//   div.textContent += phrase.shift()
//   if(counter === 11){
//     clearInterval(intervalID)
//   }
// }
// const backgroundImg = document.getElementById("img-tag")

// const imgUrls = ["http://image.com/1", "http://image.com/2", "http://image.com/3", "http://image.com/4"]

// function changeImage(){
//     const urlIndex = Math.floor(Math.random() * imgUrls.length)
//     backgroundImg.src = imgUrls[urlIndex]
// }

// setInteveral(changeImage, 5000)

// const backgroundImg = document.querySelector("html")
// console.log('backgroundImg: ', backgroundImg)
// backgroundImg.style = backgroundImage('url')

// const imgUrls = ["looneytunes.jpg"]//, "http://image.com/2", "http://image.com/3", "http://image.com/4"]

// function changeImage(){
//     const urlIndex = Math.floor(Math.random() * imgUrls.length)
//     backgroundImg.src = imgUrls[urlIndex]
// }

// setInteveral(changeImage, 5000)




const div = document.getElementById('print')

const intervalID = setInterval(addLetter, 250)

let phrase = "Press Start".split("")
let counter = 0

function addLetter(){
   counter++
   div.textContent += phrase.shift()
   if(counter === 11){
     clearInterval(intervalID)
   }
 }


 