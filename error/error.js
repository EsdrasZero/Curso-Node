//tente executar o código, se der erro, execute o catch

function execute() {
  executeTo();
}
function executeTo() {
  throw new Error("Eita deu errado!");
}
function init() {
  try {
    execute();
  } catch (e) {
    console.log(`Temos um problema! ${e.message}`);
  }
}

init();
console.log("Depois do erro");

