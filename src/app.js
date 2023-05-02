const express = require('express');
//Importando conexao mongodb
const db = require("./config/dbConnect");
const users = require("./models/User");
//Validando conexão com o bd
db.on("error", console.log.bind(console,'Erro de Conexão'));
db.once("open",() =>{
    console.log("Conexão com o Mongo feita com sucesso!")
});


const app = express();
const bodyParser = require('body-parser');
// Importando a Rota
const exemploRoutes = require('./routes/exemploRoutes');
const usersRoutes = require('./routes/usersRoutes');

// Configuração de middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definindo rotas
app.use('/exemplo', exemploRoutes);
app.use('/users', usersRoutes);

module.exports = app;