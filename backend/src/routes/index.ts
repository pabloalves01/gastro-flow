// src/routes/index.ts
import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
const router = Router();
router.get("/usuarios", obterUsuarios); // Criando a rota para buscar usuários

export default router;
