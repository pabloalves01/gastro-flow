// src/routes/index.ts
import { Router } from "express";
import { obterDadosTeste } from "../controllers/transactionController";
import { obterUsuarios } from "../controllers/userController"; 
const router = Router();
router.get("/usuarios", obterUsuarios); // Criando a rota para buscar usuários
router.get("/teste", obterDadosTeste);  // Certifique-se de que esta rota está configurada

export default router;
