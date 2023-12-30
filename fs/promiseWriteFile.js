const { writeFile } = require("fs");

function criaArquivo(name, content) {
  return new Promise((resolve, reject) => {

    writeFile(name, content, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
}

criaArquivo("promiseArquivo.txt", "Criando arquivo usando promises")
  .then(() => console.log("Arquivo promiseArquivo.txt criado com sucesso"))
  .catch((err) => console.log(err));
