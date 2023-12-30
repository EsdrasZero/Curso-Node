const { EventEmitter } = require("events");
const emitter = new EventEmitter();


const validaObjeto = (a) => {
  if (typeof a !== "object") {
    Emitter.emit("error", new Error("Tipo informado inválido"));
  }else{
    console.log("Passou na validação");
  }
};


emitter.addListener("error", (err) => {
  console.log("Evento: " + err.message);
});

let dados = { name: "Esdras", course: "NodeJS" };

validaObjeto(dados); // Passou na validação

validaObjeto('1234'); // Evento: Tipo informado inválido
