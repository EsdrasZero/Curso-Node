const express = require("express");
const app = express();
const adminRoutes = require("./routs/admin");
const usuarioRoutes = require("./routs/usuario");
const cookieParser = require("cookie-parser");

app.use(express.static("public")); 

app.use(express.json()); //função middleware para o express entender o json
app.use(cookieParser());

app.use((req, res, next) => {
  console.log("Executando o Middleware em nível de aplicação");
  return next();
});

app.get("/setcookie", (req, res) => {
  res.cookie("user", "Esdras Mendes", { maxAge: 900000, httpOnly: true });
  res.send("cookie gravado com sucesso");
});

app.get("/getcookie", (req, res) => {
  let user = req.cookies["user"];
  if (user) {
    res.send("Ola " + user + "!");
  }
});

app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

app.use("/admin", adminRoutes);
app.use("/usuario", usuarioRoutes);

app.get("*", (req, res, next) => {
  setImmediate(() => {
    next(new Error("Página não encontrada, verifique a escrita e tente novamente."));
  });
});

//Função de error
app.use((err, req, res, next) => {
  console.log("Geramos um erro veja as instruções para corrigi-lo.");
  res.status(500).send({ message: err.message });
});

app.listen(3000, () => {
  console.log("Servidor rodando http://localhost:3000");
});
