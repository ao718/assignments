var bobombs = document.baddies;
var grandTotal;


bobombs.addEventListener("submit", getTotal)






function getTotal(event){
   event.preventDefault()
   // console.log(event.target.childNodes[3].value)
   var bobombsValue = event.target[0].value * 7
   var cheepValue = event.target[1].value * 11
   var goombaValue = event.target[2].value * 5
   grandTotal = bobombsValue + cheepValue + goombaValue
   var h2 = document.createElement("h2")
h2.textContent = `${grandTotal}`
var displayTotal = document.getElementById('total')
displayTotal.appendChild(h2)
}