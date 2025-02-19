import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
import { newCategory } from "../controllers/categoryController";

const router = Router();

router.get("/usuarios", obterUsuarios);
router.post("/categories", newCategory);

export default router;
