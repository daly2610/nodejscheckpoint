const fs = require('fs')

// creer un fichier nommé 'welcome.txt' avec le contenu "Hello Node"

fs.writeFile('welcome.txt', 'Hello Node',(err) => {
    if (err) throw err;
    console.log("Fichier 'welcome.txt'  crée avec succées ")
})


// lire contenu de fichier welcome.txt et l'afficher dans la console

fs.readFile('welcome.txt', (err,data)=>{
    if (err) throw err;
    console.log( "data buffer",data)
    console.log("data string",data.toString())
})