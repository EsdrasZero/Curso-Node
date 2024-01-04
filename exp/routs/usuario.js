const express = require("express");
const router = express.Router();

function logReq(req, res, next) {
  console.log("Executando o Middleware em nível de rota usuário");
  return next();
}

router.get("/", logReq, (req, res) => {
  res.send("Acessando lista de usuários!");
});

router.get("/:id", (req, res) => {
  res.send("Acessando id do usuário: " + req.params.id);
});

module.exports = router;
