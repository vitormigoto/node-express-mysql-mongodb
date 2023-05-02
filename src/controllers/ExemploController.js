const exemplos = [
  {'id':1,'nome':'Exemplo 1'},
  {'id':2,'nome':'Exemplo 2'}
];

getExemplo = (req, res) => {
  res.send(exemplos);
};

getExemploById = (req, res) => {
  const id = req.params.id;
  const exemplo = exemplos.find((u) => u.id === Number(id));
  if (exemplo) {
    res.send(exemplo);
  } else {
    res.status(404).send('Exemplo não encontrado');
  }
}

module.exports = { getExemplo, getExemploById };