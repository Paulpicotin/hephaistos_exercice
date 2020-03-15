const myfile  = require('./sample_exercises.json') 

// faire une boucle qui affiche les noms des exos et des modules 
for (let i=0 ; i < myfile.length; i++){
    console.log(myfile[i].name) 
    for (let j=0; j < myfile[i].exercises.length; j++){
        console.log(myfile[i].exercises[j].title)        
    }    
}