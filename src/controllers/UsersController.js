const db = require('../config/connection.js');
const users = require('../models/User');

async function getUsers(req, res) {
  const response = await users.find();
  try {
    res.status(200).json(response);    
  } catch (error) {
    res.status(500).json("Erro")
  }

  // db.query('SELECT * FROM nomes', (err, result) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send('Erro ao buscar usuários');
  //     return;
  //   }
  //   res.send(result);
  // });
}

function getUsersMysql(req, res) {
  db.query('SELECT * FROM nomes', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar usuários');
      return;
    }
    res.send(result);
  });
}

function getOneUser(req, res) {
    const id = req.params.id;
    db.query(`SELECT * FROM nomes WHERE id = ${id}`, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuários');
        return;
      }
      res.send(result);
    });
  }

module.exports = { getUsers, getOneUser, getUsersMysql };