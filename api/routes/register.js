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

export default router;
