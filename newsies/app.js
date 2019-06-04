var movieGoers = [
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