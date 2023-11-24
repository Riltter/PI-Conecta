import express from "express";
import {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  login,
} from "../controllers/users.js";

const router = express.Router();

router.get("/checkemail", getUsers);

router.post("/login", login);

router.post("/", addUsers);

router.put("/:email", updateUsers);

router.delete("/:email", deleteUsers);

export default router;
