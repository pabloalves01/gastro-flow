import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
import { newCategory, getCategories } from "../controllers/categoryController";

const router = Router();

router.get("/usuarios", obterUsuarios);
router.post("/categories", newCategory);
router.get("/categories", getCategories);

export default router;
