import { db } from "../Database/db.js";

export const getUsers = (req, res) => {
  const emailToCheck = req.query.email;
  const query = "SELECT email FROM usuario WHERE email = ?";

  db.query(query, [emailToCheck], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao verificar o email." });
    } else {
      if (results.length > 0) {
        res.status(200).json({ exists: true });
      } else {
        res.status(200).json({ exists: false });
      }
    }
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

export const updateUsers = (req, res) => {
  const q =
    "UPDATE usuario SET `nome_completo` = ?, `nome_usuario` = ?, `email` = ?, `data_de_nascimento` = ?, `senha` = ? WHERE `cpf` = ?";

  const values = [
    req.body.nome_completo,
    req.body.nome_usuario,
    req.body.email,
    req.body.data_de_nascimento,
    req.body.senha,
  ];

  db.query(q, [...values, req.params.cpf], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados atualizados com sucesso.");
  });
};

export const deleteUsers = (req, res) => {
  const q = "DELETE FROM usuario WHERE `cpf` = ?";

  db.query(q, [req.params.cpf], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
