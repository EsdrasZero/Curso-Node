const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Executando o console antes da leitura do arquivo");

const dados = fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    console.log("Terminei a leitura do file.txt");
});

console.log("Executando o console após a leitura do arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));
