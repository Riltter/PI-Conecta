import express from "express";
import {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUsers);

router.put("/:cpf", updateUsers);

router.delete("/:cpf", deleteUsers);

/* {
  const { email, senha } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(400).json({ message: "Crendeciais inválidas" });
});
*/

export default router;
