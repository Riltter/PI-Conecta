import express from "express";
import {
  getUsers,
  addUsers,
  deleteUsers,
  updateUser 
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers);
router.put("/:email", updateUser);
router.delete("/:cpf", deleteUsers);

export default router;
