import { db } from "../Database/db.js";
import bcrypt from "bcrypt";

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

export const login = async (req, res) => {
  const { email, senha } = req.body;

  const query = "SELECT email, senha FROM usuario WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro interno" });
    } else if (results.length === 0) {
      res.status(401).json({ error: "Credenciais inválidas" });
    } else {
      const user = results[0];

      // compara a senha da requisição com a do bd
      if (senha != user.senha) {
        res.status(401).json({ error: "Credenciais inválidas" });
      } else {
        res.status(200).json({ message: "Login bem-sucedido" });
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
