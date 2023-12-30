const buffer = require("buffer").Buffer;

const buf = Buffer.from("Curso completo de NodeJS");

console.log(buf); // binario no formato hexadecimal

console.log(buf.toString()); // Texto: Curso completo de NodeJS

console.log(buf.toString('utf-16le')); // Texto: Curso completo de NodeJS Asiatico

const buff_string = Buffer.from("Carregando uma string", "utf-8");

console.log(Buffer.isBuffer(buff_string)); 
console.log(buff_string.toString('utf-8', 0, 10)); //traz os 10 primeiros caracteres da string : Carregando



