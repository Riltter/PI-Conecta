import { db } from "../Database/db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const addUsers = (req, res) => {
  const q =
    "INSERT INTO usuario(`cpf`, `nome_completo`, `nome_usuario`, `email`, `data_de_nascimento`, `senha`) VALUES(?)";

  const values = [
    req.body.cpf,
    req.body.nome_completo,
    req.body.nome_usuario,
    req.body.email,
    req.body.data_de_nascimento,
    req.body.senha,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso!! ");
  });
};

export const updateUser = (req, res) => {
  const { nome_usuario, campus, sobre, linkedin, instagram } = req.body;
  const email = req.params.email;

  const q =
    "UPDATE usuario SET `nome_usuario`=?, `campus`=?, `sobre`=?, `linkedin`=?, `instagram`=? WHERE `email`=?";

  const values = [nome_usuario, campus, sobre, linkedin, instagram, email];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados do usuário atualizados com sucesso.");
  });
};


export const deleteUsers = (req, res) => {
  const q = "DELETE FROM usuario WHERE `cpf` = ?";

  db.query(q, [req.params.cpf], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
