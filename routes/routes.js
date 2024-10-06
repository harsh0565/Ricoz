import express from "express";
import { addUser } from "../controller/addUser.js";
import { allUser } from "../controller/allUser.js";
import { updateUser } from "../controller/updateUser.js";
import { deleteUser } from "../controller/deleteUser.js";
const router = express.Router();




router.post("/create" , addUser )
router.get("/all-user" , allUser);
router.put("/update/:id" , updateUser);
router.delete("/delete/:id", deleteUser);


export default router;