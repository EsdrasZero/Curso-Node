function sum(x) {
  return new Promise((resolve, reject) => {
    if (Number(x) == NaN || Number(x) == undefined || typeof x != "number") {
      reject("Não é um número!");
    }
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

async function main() {
  try {
    const resultado = await sum("#");
    console.log(`Resultado com async/await: ${resultado}`);
  } catch (err) {
    console.log(`Temos problemas: ${err}`);
    console.log(`Ùsuario:${process.env.USERNAME}`);
  }
}

main();
