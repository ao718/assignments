// var myForm = document.myForm

myForm.addEventListener("submit", function(event){
event.preventDefault()


    

var firstName = myForm.firstName.value
alert(firstName)
var lastName = myForm.lastName.value

alert(lastName)
var age = myForm.age.value
alert(age)
var radioInput
alert( myForm.radioInput.value )
var selectInput
alert( myForm.selectInput.value )

// fix alert [firstName,lastName,age,radioInput,selectInput]

var checkboxArr = myForm.diets
var checkedRestrictions =[]

for(var i=0; i <checkboxArr.length; i++){
    if(checkboxArr[i].checked){
        checkedRestrictions.push(checkboxArr[i].value)
    }
}
// alert("dietary Restrictions:" + checkedRestrictions + "\nFirst Name: " ")

alert(

    ` Dietary Restriction: ${ checkedRestrictions }
     First name: ${ firstName }
      Last name: ${ lastName }
    `
)

})