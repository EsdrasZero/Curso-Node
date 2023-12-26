const fs = require('fs')

// Lendo um arquivo de forma assíncrona(Não bloqueante)
fs.readFile('texto.txt', (err, data)=>{
    if (err) throw err

    //console.log(data.toString())
})

// Lendo um arquivo de forma síncrona(Bloqueante)

const texto = fs.readFileSync("texto.txt") 

console.log(`Texto: ${texto}`)