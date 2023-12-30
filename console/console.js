console.log("Exibindo uma mensagem no console do navegador!");

//error

console.error(
  new Error(
    "Exibindo uma mensagem de erro, aparece um erro no console do navegador!"
  )
);

const carros = ["GM", "FIAT", "FORD", "VW", "RENAULT", "HONDA", "HYUNDAI"];

console.table(carros);

const dados = { name: "Esdras Mendes", empresa: "FECAP" };

console.table(dados);

console.count("processo");
console.count("processo");
console.count("processo");

console.log("Resetando o processo");

console.countReset("processo");

console.count("processo");

console.time("contador");
for (let index = 0; index < 10; index++) {
  //console.log("--------");
}

console.timeEnd("contador");

console.assert(true, "Faça alguma coisa");

console.assert(false, "Ih rapaz %s, que pena!", "Não funcionou");

//Limpa todos os logs do console
//console.clear();    

