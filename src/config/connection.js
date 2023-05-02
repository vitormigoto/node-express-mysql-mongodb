const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'merlin123@',
  database: 'teste'
});

connection.connect(function(err) {
  if (err) {
    console.error('Erro ao conectar com o banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem sucedida com o banco de dados');
});

module.exports = connection;