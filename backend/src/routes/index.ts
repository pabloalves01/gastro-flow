import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
import { newCategory, getCategories } from "../controllers/categoryController";

const router = Router();

router.get("/usuarios", obterUsuarios);
router.get("/categories", getCategories);
router.post("/categories", newCategory);

export default router;
