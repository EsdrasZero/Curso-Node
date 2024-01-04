const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Acessando Administração!");
});

router.get("/:id", (req, res) => {
  res.send("Acessando Administração com o id: " + req.params.id);
});

router.post("/", (req, res) => {
  const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`;
  res.send(`Acessando Administração com o corpo:` + corpo);
});

router.patch("/:id", (req, res) => {
  res.send("Acessando Administração com o patch");
});

router.put("/:id", (req, res) => {
  res.send("Acessando Administração com o put");
});
router.delete("/:id", (req, res) => {
  res.send("Acessando Administração com o delete");
});
  

module.exports = router;