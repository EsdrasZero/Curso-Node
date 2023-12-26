require("./subdirectory/sub.js");

console.log("-------------------------------------------");
console.log(`Nome do arquivo: `, __filename);
console.log(`Diretório do arquivo: `, __dirname);
console.log(`Diretório em que foi invocado: `, process.cwd());
//console.log(`Parâmetros de execução: `, process.argv);
console.log(`Sistema Operacional: `, process.env.OS);
console.log(`Usúario no Sistema operacional: `, process.env.USERNAME);
console.log(`Idioma: `, process.env.LANG);
console.log(`Nome do Servidor: `, process.env.COMPUTERNAME);

switch (process.argv[2]) {
  case "-a":
    console.log(`Execute rotina principal`);
    break;
  case "-i":
    console.log(`Execute instalação`);
    break;
  case "-q":
    console.log(`Encerrando aplicação`);
    process.exit(); //interrope imediatamente o código
    break;
  default:
    console.log(`Parâmetro inválido`);
}
console.log(`Ambiente do servidor: `, process.platform);
